class AddSocialBadgeToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :show_linkedin_badge, :boolean, default: false
  end
end
