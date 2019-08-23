class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.references :drink, null: false, foreign_key: true
      t.string :name
      t.string :comment

      t.timestamps
    end
  end
end
