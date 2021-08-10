class Project < ApplicationRecord
  validates :title, presence: true, uniqueness: { message: '%{value} is already used' }

  mount_uploader :image, ProjectImageUploader

  has_many :taggings, as: :subject, dependent: :destroy
  has_many :tags, through: :taggings

  belongs_to :user

  has_rich_text :description

  scope :sort_order, -> { order(:sort) }
  scope :main, -> { where(is_side: false) }
  scope :side, -> { where(is_side: true) }
  include RailsSortable::Model
  set_sortable :sort
end
