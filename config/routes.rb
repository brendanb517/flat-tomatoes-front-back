Rails.application.routes.draw do
  # get 'session/create'
  # get 'session/destroy'
  resources :comments, only: [:index, :create, :show, :update, :destroy]
  resources :movies, only: [:index, :show, :create]
  resources :users, only: [:index, :create, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  #index "/login", to: "login#get"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
end
