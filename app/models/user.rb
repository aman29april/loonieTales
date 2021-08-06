class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable,
         :omniauthable, omniauth_providers: %i[facebook google_oauth2]

  validates :username, presence: true

  has_many :posts, dependent: :destroy

  include OmniauthableUser

  def following_ids
    []
  end

  def following_tag_ids
    []
  end

  def following_tags
    []
  end
end
