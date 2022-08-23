class UsersController < ApplicationController
    def index 
        return json: User.all 
    end
end
