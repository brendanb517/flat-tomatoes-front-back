class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :poster
      t.integer :year
      t.string :plot
      t.string :genre
      t.integer :upvotes
      t.integer :downvotes

      t.timestamps
    end
  end
end
