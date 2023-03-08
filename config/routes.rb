Rails.application.routes.draw do
  # get 'session/create'
  # get 'session/destroy'
  resources :comments
  resources :movies
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
<<<<<<< HEAD
  #index "/login", to: "login#get"
=======

   get "users", to: "users#index"
   get "users/:id", to: "users#show"
   post "users", to: "users#create"
   patch "users/:id", to: "users#update"
   delete "users/:id", to: "users#destroy"
>>>>>>> fda65bf44a8355144474f0293b01bd642d6094b5
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
end
