class QuestionController < ApplicationController
  def show
    @user = User.find_by(name: 'Mannah')
    @question = Question.find(params[:id])
    @quiz = Quiz.find(params[:quiz_id])
  end
end
