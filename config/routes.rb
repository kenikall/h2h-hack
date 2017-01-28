Rails.application.routes.draw do
  root 'quiz#index'

  resources :users

  resources :quiz

  resources :quizzes do
    resources :question
  end

  resources :questions do
    resources :responses
  end

end
