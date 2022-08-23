class SellersController < ApplicationController
    def index 
        render json: Seller.all 

    end
end
