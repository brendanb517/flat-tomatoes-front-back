class UsersController < ApplicationController

    def index 
        users = User.all
        render json: users, status: :ok
    end

    def create 
        user = User.create(user_params) 
        if(user)
            render json: user, status: :created
        else 
            render json: {error: "User not found"}, status: not_found
        end
    end

    def show
        user = User.find_by(id: params[:id])
        if(user)
            render json: user
        else 
            render json: {error: "User not found"}, status: not_found
        end
    end

    def update 
        user = User.find_by(id: params[:id])
        if(user.valid?)
            user.update(user_params)
            if(user)
                render json: user, status: :accepted
            else
                render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {error: "User not found"}, status: :not_found
        end
    end

    def destroy 
        user = User.find_by(id: params[:id])
        if(user.valid?)
            user.destroy 
            head :no_content 
        else 
            render json: { error: "User not found" }, status: :not_found
        end
    end

private 

    def user_params
        params.permit(:username, :email, :password)
    end
end
