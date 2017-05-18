get '/clothing_items' do
  @clothing_items = ClothingItem.all
  erb :'clothing_items/index'
end

post '/clothing_items' do
  clothing_item = ClothingItem.new(params[:clothing_item])
  if clothing_item.save
    if request.xhr?
      erb :'/clothing_items/_single', locals: {clothing_item: clothing_item}, layout: false
    else
      redirect '/clothing_items'
    end
  else
    @errors = clothing_item.errors.full_messages
    @clothing_items = ClothingItem.all
    erb :'/clothing_items/index'
  end
end

get '/clothing_items/:id' do
  @clothing_item = ClothingItem.find(params[:id])
  if request.xhr?
    erb :'/clothing_items/show', layout: false
  else
    erb :'/clothing_items/show'
  end
end