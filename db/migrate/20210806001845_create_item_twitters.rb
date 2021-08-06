class CreateItemTwitters < ActiveRecord::Migration[6.1]
  def change
    create_table :item_twitters do |t|
      t.string :twitter_id, null: false
    end
  end
end
