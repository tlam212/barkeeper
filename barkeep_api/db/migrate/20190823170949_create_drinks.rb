class CreateDrinks < ActiveRecord::Migration[6.0]
  def change
    create_table :drinks do |t|
      t.string :name
      t.string :recipe
      t.string :image

      t.timestamps
    end
  end
end
