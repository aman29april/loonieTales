class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false, unique: true
      t.text :description
      t.string :image
      t.string :caption
      t.string :source_url
      t.boolean :accepted, null: false, default: false

      t.belongs_to :user, null: false
      t.timestamps null: false
    end
  end
end
