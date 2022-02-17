class StaticPage < ApplicationRecord
  belongs_to :user

  validates :user_id, presence: true
  validates :title, presence: true, uniqueness: { message: '%{value} is already used' },
                    length: { minimum: 5 }, allow_blank: false
  validates :body, presence: true, length: { minimum: 50 }, allow_blank: false

  extend FriendlyId
  friendly_id :title, use: %i[slugged history finders]

  has_rich_text :body

  mount_uploader :picture, PostImageUploader

  def body_text
    body.body&.to_plain_text || ''
  end

  def body_html
    body.body&.to_html
  end

  def meta_info
    {
      title: title,
      description: meta_description.present? ? meta_description : title,
      keywords: meta_keywords.present? ? meta_keywords : all_tags
    }
  end
end
