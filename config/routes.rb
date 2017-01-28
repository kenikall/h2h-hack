Rails.application.routes.draw do
  root 'quiz#index'

  resources :users

  resources :quizzes do
    resources :question
  end

  resources :questions do
    resources :responses
  end

  # get 'user/show'

  # get 'question/show'

  # get 'quiz/index'
  # get 'questions/show' => 'questions#show'
end
