class AddCounterToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :responses, :likes_count, :integer, default: 0
  end
end
