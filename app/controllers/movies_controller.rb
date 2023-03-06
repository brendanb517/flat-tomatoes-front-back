class MoviesController < ApplicationController
    def index 
        movies = Movie.all
        render json: movies, status: :ok
    end

    def show
        movie = Movie.find_by(id: params[:id])
        if(movie)
            render json: movie
        else 
            render json: {error: "Movie not found"}, status: not_found
        end
    end

    def create 
         movie = Movie.create(movie_params) 
        if(movie)
            render json: movie, status: :created
        else 
            render json: {error: "User not found"}, status: not_found
        end
    end

   
    private

    def movie_params
        params.permit(:name, :poster, :year, :plot, :genre, :upvotes, :downvotes)
    end
  

 
end
