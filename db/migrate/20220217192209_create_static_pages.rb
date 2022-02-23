class CreateStaticPages < ActiveRecord::Migration[7.0]
  def change
    create_table :static_pages do |t|
      t.string :title
      t.string :body
      t.string :picture
      t.string :meta_keywords
      t.string :meta_description
      t.string :slug, unique: true

      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
