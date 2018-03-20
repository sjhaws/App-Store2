class Api::ProgramsController < ApplicationController
  def index
    render json: Program.all
  end

  def update
    @program = Program.find(params[:id])
    if @program.update(program_params)
      render json: @program
    else
      render json: @program.errors, status: 422
    end
  end

  private
    def program_params
      params.require(:program).permit(:name, :description, :category, :price, :version, :author, :logo)
    end
end
