class AddResponsesCountToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :responses_count, :integer, null: false, default: 0
  end
end
