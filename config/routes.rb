Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  # sessions: 'users/sessions',
  #   root 'home#show'
  root 'dashboards#show'
  resources :posts
  resources :tags, only: [:show]
  post 'posts/create_and_edit' => 'posts#create_and_edit', as: :post_create_and_edit
  resources :users, only: %i[show edit update] do
    resources :recommended_posts, only: [:index]

    resources :projects, except: %w(show) do
      resource :acceptance, only: :update, module: :projects
    end

    resources :experiences, except: %w(show)
  end

  namespace :admin do
    resource :dashboard, only: [:show]
    resources :featured_tags, only: [:create, :destroy]
    resources :featured_posts, only: [:create, :destroy]
  end

  namespace :api do
    get "autocomplete" => "search_autocomplete#index"
  end

  get '/health_check' => 'application#health_check'
end
