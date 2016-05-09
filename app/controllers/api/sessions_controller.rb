class Api::SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(user_params)
    if user
      render json: user
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def show
    render json: current_user
  end

  def destroy
    user = current_user
    log_out!
    render json: user
  end
  
end
