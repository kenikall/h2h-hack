class QuizController < ApplicationController
  def index
    @user = User.find_by(name: 'Mannah')
    @quizzes = Quiz.where(user_id: @user.id)
  end
end
