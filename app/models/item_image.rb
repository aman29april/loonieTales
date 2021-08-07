class ItemImage < ApplicationRecord
  has_one :item, as: :target, dependent: :destroy
  validates :image, presence: true

  # mount_uploader :image, ItemImageUploader
end
