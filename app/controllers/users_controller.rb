class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response

    def index 
        users = User.all
        render json: users, status: :ok
    end

    def create 
        user = User.create(user_params)
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        if(user)
            render json: user
        else 
            render json: {error: "Not authorized"}, status: :unauthorized
        end
        # render json: @current_user
    end

    # def update 
    #     user = User.find_by(id: params[:id])
    #     if(user.valid?)
    #         user.update(user_params)
    #         if(user)
    #             render json: user, status: :accepted
    #         else
    #             render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    #         end
    #     else
    #         render json: {error: "User not found"}, status: :not_found
    #     end
    # end

    # def destroy 
    #     user = User.find_by(id: params[:id])
    #     if(user.valid?)
    #         user.destroy 
    #         head :no_content 
    #     else 
    #         render json: { error: "User not found" }, status: :not_found
    #     end
    # end

private 

    def user_params
        params.permit(:name, :email, :password)
    end

    def invalid_response
        render json: {errors: invalid.record.errors.full_messages}, status: :422
    end
end
