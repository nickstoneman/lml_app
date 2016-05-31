class UsersController < ApplicationController
  layout '_base'

  def show
  	# @disable_nav = true
  	@user = User.find(params[:id])
  	# debugger
  end

  def new
    @user = User.new
  end

  def create
  	# @disable_nav = true
  	@user = User.new(params[:user])
    if @user.save
      # Handle sucessful save
    else
      render 'new'
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end 
end
