class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @quizzes = Quiz.where(user_id: @user.id)
  end
end
