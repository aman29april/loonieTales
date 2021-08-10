class AddSideProjectOptionToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :sort, :integer
    add_column :projects, :is_side, :boolean, default: false
    add_column :projects, :url, :string
    add_column :projects, :team_size, :integer
  end
end
