Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :code_files, only: [:create, :update, :index, :destroy]
  end

    get "/*path", to: "static_pages#root"
end
