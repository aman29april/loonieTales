class Tag < ApplicationRecord
  has_many :taggings, dependent: :destroy
  has_many :posts, through: :taggings, source: :subject, source_type: 'Post'
  has_many :projects, through: :taggings, source: :subject, source_type: 'Project'
  validates :name, presence: true, uniqueness: { message: '%{value} is already used' }

  has_many :tag_relationships, -> { order(relevance: :desc) }, dependent: :destroy
  has_many :related_tags, through: :tag_relationships, source: :related_tag

  extend FriendlyId
  friendly_id :name, use: %i[slugged finders]

  def self.first_or_create_with_name!(name)
    where(lowercase_name: name.strip.downcase).first_or_create! do |tag|
      tag.name = name.strip
    end
  end
end
