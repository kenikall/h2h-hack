class QuizController < ApplicationController
  def index
    @user = User.find_by(name: 'Mannah')
    @quizzes = @user.quizzes
  end
end
