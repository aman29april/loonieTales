class AddMetaDataToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :meta_keywords, :string
    add_column :posts, :meta_description, :string
    add_column :posts, :language, :string
    add_column :posts, :view_count, :integer, default: 0
  end
end
