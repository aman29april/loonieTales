class Experience < ApplicationRecord
  belongs_to :user

  validates :title, :company, presence: true

  has_rich_text :description

  mount_uploader :avatar, AvatarUploader

  def self.default_avatar
    'experience-default.png'
  end
end
