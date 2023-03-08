class MoviesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response

    def index 
        movies = Movie.all
        render json: movies, status: :ok
    end

    def show
        movie = Movie.find(params[:id])
        render json: movie, serializer: MovieCommentsSerializer
    end

    def create 
        movie = Movie.create(movie_params)
        render json: movie, status: :created
    end

   
    private

    def movie_params
        params.permit(:name, :poster, :year, :plot, :genre, :upvotes, :downvotes)
    end

    def not_found_response
        render json: {error: "Movie not found"}, status: 404
    end

    def invalid_response
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end
end
