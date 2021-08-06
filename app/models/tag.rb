class Tag < ApplicationRecord
  has_many :taggings, dependent: :destroy
  has_many :posts, through: :taggings, source: :subject, source_type: 'Post'
  has_many :projects, through: :taggings, source: :subject, source_type: 'Project'
  validates :name, presence: true, uniqueness: { message: '%{value} is already used' }
end
