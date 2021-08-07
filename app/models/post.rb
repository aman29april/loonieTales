class Post < ApplicationRecord
  validates :body, :user_id, presence: true
  belongs_to :user

  has_many :taggings, as: :subject, dependent: :destroy
  has_many :tags, through: :taggings

  has_many :items, -> { order('sort_rank asc') }, dependent: :destroy

  validates :title, presence: true, uniqueness: { message: '%{value} is already used' }

  scope :recent, -> { order(created_at: :desc) }
  scope :latest, ->(number) { recent.limit(number) }
  scope :top_stories, ->(number) { order(likes_count: :desc).limit(number) }
  scope :published, -> { where.not(published_at: nil) }
  scope :drafts, -> { where(published_at: nil) }
  scope :featured, -> { where(featured: true) }

  delegate :username, to: :user

  before_save :generate_lead!

  extend FriendlyId
  friendly_id :title, use: %i[slugged history finders]

  has_rich_text :body
  # has_rich_text :content

  def unpublish
    self.published_at = nil
  end

  def publish
    self.published_at = Time.zone.now
    self.slug = nil # let FriendlyId generate slug
    save
  end

  def self.tagged_with(name)
    Tag.find_by!(name: name).posts
  end

  def body_text
    body.body&.to_plain_text || ''
  end

  def published?
    published_at.present?
  end

  def words
    body.split(' ')
  end

  def word_count
    words.size
  end

  def all_tags=(names)
    self.tags = names.split(',').map do |name|
      Tag.first_or_create_with_name!(name)
    end
    RelatedTagsCreator.create(tag_ids)
  end

  def all_tags
    tags.map(&:name).join(', ')
  end

  def related_posts(size: 3)
    Post.joins(:taggings).where.not(id: id).where(taggings: { tag_id: tag_ids }).distinct
        .published.limit(size).includes(:user)
  end

  def body_html
    body.body&.to_html
  end

  def generate_lead!
    if self.published?
      post_body = Nokogiri::HTML::Document.parse(self.body_html)
      if post_body.css('h2').size > 0
        self.lead = post_body.css('h2')[0].to_s
      elsif post_body.css('h3').size > 0
        self.lead = post_body.css('h3')[0].to_s
      elsif post_body.css('p').size > 0
        self.lead = post_body.css('p')[0].to_s
      elsif post_body.css('div').size > 0
        self.lead = post_body.css('div')[0].to_s
      end
    end
  end
end
