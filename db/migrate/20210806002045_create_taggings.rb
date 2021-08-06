class CreateTaggings < ActiveRecord::Migration[6.1]
  def change
    create_table :taggings do |t|
      t.belongs_to :tag, null: false
      t.belongs_to :subject, polymorphic: true, null: false, index: true
      t.timestamps
    end
  end
end
