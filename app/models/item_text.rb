class ItemText < ApplicationRecord
  has_one :item, as: :target, dependent: :destroy
  validates :description, presence: true
end
