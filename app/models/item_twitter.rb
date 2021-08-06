class ItemTwitter < ApplicationRecord
  has_one :item, as: :target, dependent: :destroy
  validates :twitter_id, presence: true
end
