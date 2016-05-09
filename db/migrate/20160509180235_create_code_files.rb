class CreateCodeFiles < ActiveRecord::Migration
  def change
    create_table :code_files do |t|
      t.text :content, null: false, default: ""
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :code_files, :user_id
  end
end
