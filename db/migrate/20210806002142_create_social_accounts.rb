class CreateSocialAccounts < ActiveRecord::Migration[6.1]
  def change
    create_table :social_accounts do |t|
      t.belongs_to :user, null: false
      t.integer :account_type, null: false, unique: true
      t.string :url, null: false, unique: true
    end
  end
end
