class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response

    def index 
        comments = Comment.all
        render json: comments, status: :ok
    end

    def create 
        comment = Comment.create(comment_params) 
        render json: comment, status: :created
    end

    def show
        comment = find_comment
        render json: comment
    end

    def update
        comment = find_comment
        comment.update(comment_params)
        render json: comment, status: :accepted
    end

    def destroy 
        comment = find_comment
        comment.destroy 
        head :no_content
    end


    private

    def find_comment
        Comment.find(params[:id])
    end

    def comment_params
        params.permit(:text, :user_id, :movie_id, )
    end

    def not_found_response
        render json: {error: "Comment not found"}, status: 404
    end

    def invalid_response
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end
end