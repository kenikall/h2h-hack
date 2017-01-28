class QuestionController < ApplicationController
  def show
    @question = Question.first
    @quiz = Quiz.first
  end
end
