class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

    def index 
        comments = Comment.all
        render json: comments, status: :ok
    end

    def create 
        comment = Comment.create(comment_params) 
        render json: comment, status: :created
        #byebug
        # if(comment.valid?)
        #     render json: comment, status: :created
        # else 
        #     render json: {errors: comment.errors.full_messages}, status: :unprocessable_entity
        # end
    end

    def show
        comment = find_comment
        render json: comment
    end

    def update
        comment = find_comment
        comment.update(comment_params)
        render json: comment, status: :accepted
        # comment = Comment.find_by(id: params[:id])
        # if(comment.valid?)
        #     comment.update(comment_params)
        #     if(comment)
        #         render json: comment, status: :accepted
        #     else
        #         render json: {errors: comment.errors.full_messages}, status: :unprocessable_entity
        #     end
        # else
        #     render_not_found_response
        # end
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
        params.permit(:text)
    end

    def render_not_found_response
        render json: {error: "Comment not found"}, status: :not_found
    end

    def render_invalid_response
        render json: {errors: comment.errors.full_messages}, status: :unprocessable_entity
    end
end