class CreateLmiaJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :lmia_jobs do |t|
      t.references :company, null: false, foreign_key: true
      t.references :noc, null: false, foreign_key: true
      t.references :program_stream, null: false, foreign_key: true
      t.integer :positions_approved
      t.integer :year
      t.integer :month
      t.string :province

      t.timestamps
    end
  end
end
