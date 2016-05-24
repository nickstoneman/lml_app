class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :business_name
      t.string :business_logo
      t.string :business_address

      t.timestamps
    end
  end
end
