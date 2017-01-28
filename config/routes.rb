Rails.application.routes.draw do
  root 'quiz#index'

  get 'user/show'

  get 'question/show'

  get 'quiz/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
