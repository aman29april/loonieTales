class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string   'title'
      t.text     'body'
      t.integer  'likes_count', default: 0
      t.datetime 'published_at'
      t.boolean  'featured', default: false
      t.string   'picture'
      t.timestamps
    end
  end
end
