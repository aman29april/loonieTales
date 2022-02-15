class CreateNocs < ActiveRecord::Migration[7.0]
  def change
    create_table :nocs do |t|
      t.integer :code
      t.string :skill_type
      t.string :title

      t.timestamps
    end
  end
end
