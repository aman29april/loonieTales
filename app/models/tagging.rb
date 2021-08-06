class Tagging < ApplicationRecord
  belongs_to :subject, polymorphic: true, touch: true
  belongs_to :tag

  validates :tag, presence: true
  validates :tag_id, uniqueness: { scope: %i[subject_id subject_type] }

  delegate :name, to: :tag

  scope :by_tag, lambda { |tag_id|
    where(tag_id: tag_id).order(updated_at: :desc)
  }
end
