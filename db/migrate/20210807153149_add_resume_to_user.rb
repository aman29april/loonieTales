class AddResumeToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :resume, :string
    add_column :users, :skills, :string
    add_column :users, :mobile, :string
  end
end
