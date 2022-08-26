Rails.application.routes.draw do
  
  resources :items, only: [:index, :create, :update, :destroy, :show]
  resources :users, only: [:index, :create]
  resources :sellers, only: [:index]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
