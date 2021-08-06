class CreateItemTexts < ActiveRecord::Migration[6.1]
  def change
    create_table :item_texts do |t|
      t.text :description, null: false
    end
  end
end
