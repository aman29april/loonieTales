class AddUserToPosts < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :user, index: true, foreign_key: true
  end
end
