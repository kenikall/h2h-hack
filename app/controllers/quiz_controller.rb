class QuizController < ApplicationController
  def index
    @user = User.find_by(name: 'Mannah')
    @quizzes = Quiz.all
  end

  def show
    @user = User.find_by(name: 'Mannah')
    @quiz = Quiz.find(params[:id])
  end
end
