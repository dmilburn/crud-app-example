class ClothingItem < ActiveRecord::Base
  # Remember to create a migration!
  validates :url, :kind, :color, presence: true
end
