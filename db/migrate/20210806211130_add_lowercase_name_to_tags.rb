class AddLowercaseNameToTags < ActiveRecord::Migration[6.1]
  def change
    add_column :tags, :lowercase_name, :string
    add_column :tags, :slug, :string
  end
end
