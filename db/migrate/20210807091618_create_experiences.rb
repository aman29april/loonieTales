class CreateExperiences < ActiveRecord::Migration[6.1]
  def change
    create_table :experiences do |t|
      t.string :company, null: false
      t.string :location
      t.string :title, null: false
      t.string :description
      t.date :start_date, null: false
      t.date :end_date
      t.boolean :working_here, default: false

      t.references :user, index: true, foreign_key: true
      t.timestamps
    end
  end
end
