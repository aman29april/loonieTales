class Item < ApplicationRecord
  belongs_to :post, touch: true
  belongs_to :target, polymorphic: true

  after_destroy :destroy_target

  enum target_type: {
    twitter: 'ItemTwitter',
    text: 'ItemText',
    image: 'ItemImage'
  }

  validates :target_type,
            presence: true,
            inclusion: { in: Item.target_types.keys }

  private

  def destroy_target
    target.destroy
  end
end
