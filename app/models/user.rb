class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable,
         :omniauthable, omniauth_providers: %i[facebook google_oauth2]

  # attr_accessor  :facebook, :twitter, :stackoverflow
  validates :username, presence: true

  has_many :posts, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :social_accounts, dependent: :destroy
  has_many :projects, dependent: :destroy
  has_many :experiences, dependent: :destroy
  has_many :liked_posts, through: :likes, source: :likeable, source_type: 'Post'
  has_many :liked_responses, through: :likes, source: :likeable, source_type: 'Response'

  has_many :bookmarks, dependent: :destroy
  has_many :bookmarked_posts, through: :bookmarks, source: :bookmarkable, source_type: 'Post'
  has_many :bookmarked_responses, through: :bookmarks, source: :bookmarkable, source_type: 'Response'

  include OmniauthableUser
  mount_uploader :avatar, AvatarUploader

  extend FriendlyId

  friendly_id :username, use: %i[slugged finders]

  def add_like_to(likeable_obj)
    likes.where(likeable: likeable_obj).first_or_create
  end

  def remove_like_from(likeable_obj)
    likes.where(likeable: likeable_obj).destroy_all
  end

  def liked?(likeable_obj)
    send("liked_#{downcased_class_name(likeable_obj)}_ids").include?(likeable_obj.id)
  end

  def add_bookmark_to(bookmarkable_obj)
    bookmarks.where(bookmarkable: bookmarkable_obj).first_or_create
  end

  def remove_bookmark_from(bookmarkable_obj)
    bookmarks.where(bookmarkable: bookmarkable_obj).destroy_all
  end

  def bookmarked?(bookmarkable_obj)
    send("bookmarked_#{downcased_class_name(bookmarkable_obj)}_ids").include?(bookmarkable_obj.id)
  end

  def following_ids
    []
  end

  def following_tag_ids
    []
  end

  def following_tags
    []
  end

  def full_name
    name = "#{first_name} #{last_name}"
    (name.present? ? name : username).titleize
  end

  def skills_array
    return [] if skills.blank?

    skills.split(',').map { |s| s.strip }
  end

  def self.default_avatar
    'default-avatar.svg'
  end

  def has_social_links?
    linkedin.present? || github.present?
  end
end
