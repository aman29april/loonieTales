class AddLeadToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :lead, :text
  end
end
