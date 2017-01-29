class VideosController < ApplicationController

  def show
    @user = User.first
  end
end