class AddLinkToExperience < ActiveRecord::Migration[6.1]
  def change
    add_column :experiences, :company_link, :string
    add_column :experiences, :company_heading, :string
  end
end
