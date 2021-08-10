class AddCompanyLogoUrlToExperience < ActiveRecord::Migration[6.1]
  def change
    add_column :experiences, :image_url, :string
    add_column :users, :hobbies, :string
    add_column :users, :languages, :string
  end
end
