class AddLogoToExperience < ActiveRecord::Migration[6.1]
  def change
    add_column :experiences, :avatar, :string
  end
end
