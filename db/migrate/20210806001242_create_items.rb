class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.belongs_to    :post, index: true, null: false
      t.integer       :sort_rank, null: false
      t.belongs_to    :target, polymorphic: true, null: false, index: true, unique: true

      t.timestamps null: false
    end
  end
end
