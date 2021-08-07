class Experience < ApplicationRecord
  belongs_to :user

  validates :title, :company, :start_date, presence: true

  validate :end_date_is_after_start_date, :has_end_or_working_here

  has_rich_text :description

  mount_uploader :avatar, AvatarUploader

  scope :chronological, -> { order(start_date: :desc) }

  def self.default_avatar
    'experience-default.png'
  end

  def end_date_is_after_start_date
    return if end_date.blank? || start_date.blank?

    errors.add(:end_date, 'cannot be before the start date') if end_date < start_date
  end

  def has_end_or_working_here
    errors.add(:end_date, 'should be present or select working here') if end_date.blank? && working_here == false
  end
end
