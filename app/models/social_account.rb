class SocialAccount < ApplicationRecord
  belongs_to :user
  enum account_type: %i[git_hub facebook twitter linked_in]

  validates :user, presence: true

  validates :url, presence: true,
                  uniqueness: true,
                  format: { with: URI::DEFAULT_PARSER.make_regexp }

  validates :account_type,
            presence: true,
            inclusion: { in: SocialAccount.account_types.keys },
            uniqueness: { message: '%{value} is already used' }
end
