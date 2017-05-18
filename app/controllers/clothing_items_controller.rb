get '/clothing_items' do
  @clothing_items = ClothingItem.all
  erb :'clothing_items/index'
end