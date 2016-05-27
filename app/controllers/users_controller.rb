class UsersController < ApplicationController
  layout '_base'

  def show
  	# @disable_nav = true
  	@user = User.find(params[:id])
  	# debugger
  end

  def new
  	# @disable_nav = true
  	@user = User.new
  end 
end
