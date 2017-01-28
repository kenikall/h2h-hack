Rails.application.routes.draw do
  root 'quiz#index'

  resources :users

  resources :quizzes do
    resources :questions
  end

  resources :questions do
    resources :responses
  end

  # get 'user/show'

  # get 'question/show'

  # get 'quiz/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
