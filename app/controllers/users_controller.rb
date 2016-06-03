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
  	@user = User.new(user_params)
    if @user.save
      flash[:success] = "Welcome to Last Minute List!"
      redirect_to @user
    else
      render 'new'
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end 
end
