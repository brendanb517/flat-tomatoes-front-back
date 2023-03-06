Rails.application.routes.draw do
  get 'session/create'
  get 'session/destroy'
  resources :comments
  resources :movies
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
end
