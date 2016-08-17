class Api::CodeFilesController < ApplicationController

  def index
    files = current_user.code_files.all
    render json: files
  end

  def show
    render json: current_file
  end

  def create
    file = current_user.code_files.new(code_file_params)
    if file.save
      render json: file
    else
      render json: file.errors.full_messages, status: 422
    end
  end

  def update
    if current_file.update(code_file_params)
      render json: current_file
    else
      render json: current_file.errors.full_messages, status: 422
    end
  end

  def destroy
    current_file.destroy
    render json: current_file
  end

  private

  def current_file
    @current_file ||= CodeFile.find(params[:id])
  end

  def code_file_params
    params.require(:code_file).permit(:content)
  end

end
