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
    erb :'/clothing_items/index'
  end
end