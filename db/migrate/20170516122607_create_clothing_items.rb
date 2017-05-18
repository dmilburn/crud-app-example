class CreateClothingItems < ActiveRecord::Migration
  def change
    create_table :clothing_items do |t|
      t.string :color, null: false
      t.string :kind, null: false
      t.string :url, null: false

      t.timestamps
    end
  end
end
