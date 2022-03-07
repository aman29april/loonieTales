Rails.application.routes.draw do
  # resources :info, controller: 'static_pages'
  resources :static_pages, path: 'info'

  resources :provinces
  resources :program_streams
  resources :nocs
  resources :companies
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks',
                                    registrations: 'users/registrations' }

  root 'dashboards#show'
  resources :posts
  resources :lmia_jobs
  # get 'admin', to: 'admin#index'
  resources :admin, only: :index do
    collection do
      delete :delete_cache
    end
  end
  get 'lmia-jobs', to: 'lmia_jobs#index'
  resources :tags, only: [:show]
  post 'posts/create_and_edit' => 'posts#create_and_edit', as: :post_create_and_edit

  get 'calculators', to: 'calculator#index'
  get 'crs-calculator', to: 'calculator#crs'
  get 'tax-calculator', to: 'calculator#tax'
  get 'ielts-to-clb-calculator', to: 'calculator#ieltsToClb'

  resources :users, only: %i[show edit update] do
    resources :recommended_posts, only: [:index]

    resources :projects, except: %i[show index] do
      resource :acceptance, only: :update, module: :projects
    end

    resources :experiences, except: %i[show index]

    get :posts, on: :member
  end

  namespace :admin do
    resource :dashboard, only: [:show]
    resources :featured_tags, only: %i[create destroy]
    resources :featured_posts, only: %i[create destroy]
  end

  namespace :api do
    get 'autocomplete' => 'search_autocomplete#index'

    resources :users, only: [:show]
  end

  get '/health_check' => 'application#health_check'
end
