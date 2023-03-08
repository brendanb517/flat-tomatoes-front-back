class CommentsController < ApplicationController


    def index 
        comments = Comment.all
        render json: comments, status: :ok
    end

    def create 
        comment = Comment.create(comment_params) 
        #byebug
        if(comment.valid?)
            render json: comment, status: :created
        else 
            render json: {errors: comment.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        comment = Comment.find_by(id: params[:id])
        if(comment)
            render json: comment
        else 
            render json: {error: "Comment not found"}, status: :not_found
        end
    end

    def update 
        comment = Comment.find_by(id: params[:id])
        if(comment)
            comment.update(comment_params)
            if(comment.valid?)
                render json: comment, status: :accepted
            else
                render json: {errors: comment.errors.full_messages}, status: :unprocessable_entity
            end
        else 
            render json: {error: "Comment not found"}, status: :not_found
        end
        
    end

    def destroy 
        comment = Comment.find_by(id: params[:id])
        if(comment)
            comment.destroy 
            head :no_content 
        else 
            render json: { error: "Comment not found" }, status: :not_found
        end
    end


    private

    def comment_params
        params.permit(:text, :user_id, :movie_id, )
    end
end
