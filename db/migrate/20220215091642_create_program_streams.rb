class CreateProgramStreams < ActiveRecord::Migration[7.0]
  def change
    create_table :program_streams do |t|
      t.string :name

      t.timestamps
    end
  end
end
