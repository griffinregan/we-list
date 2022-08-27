class ItemsController < ApplicationController
    def index 
        render json: Item.all 
    end
    
    def show
        item = Item.find_by(id: params[:id])
        if item
            render json: item
        else
            render_not_found_response
        end
    end
    
    def create 
        item = Item.create(item_params)
        render json: item.item, status: :created
    end 
    
    def update
        item = Item.find_by(id: params[:id])
        if item
            item.update(item_params)
            render json: item
        else
            render_not_found_response
        end
       end

    def destroy
        item = Item.find(params[:id])
        item.destroy
        head :no_content
    end 

    private
    def item_params
        params.permit(:name, :price, :image, :description, :user_id, :seller_id)
    end
        

    def render_not_found_response
        render json: { error: 'Item not found' }, status: :not_found
    end 

end
