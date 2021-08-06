Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  # sessions: 'users/sessions',
  #   root 'home#show'
  root 'dashboards#show'
  resources :posts
  post 'posts/create_and_edit' => 'posts#create_and_edit', as: :post_create_and_edit
  resources :users, only: %i[show edit update] do
    resources :recommended_posts, only: [:index]
  end

  get '/health_check' => 'application#health_check'
end
