class Project < ApplicationRecord
  validates :title, presence: true, uniqueness: { message: '%{value} is already used' }

  mount_uploader :image, ProjectImageUploader

  has_many :taggings, as: :subject, dependent: :destroy
  has_many :tags, through: :taggings
end
