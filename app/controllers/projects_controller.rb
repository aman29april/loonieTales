class ProjectsController < ApplicationController
  before_action :authenticate_user!, except: [:show]
  before_action :load_project, only: %i[edit show update destroy]

  def index
    @projects = current_user.projects.all
  end

  def new
    @project = current_user.projects.new
  end

  def update
    @project.assign_attributes(project_params)
    if @project.save
      redirect_to user_path(current_user), notice: 'Successfully published the project!'
    else
      flash.now[:alert] = 'Could not update the project, Please try again'
      render :edit
    end
  end

  def create
    @project = current_user.projects.build(project_params)

    if @project.save
      redirect_to user_path(current_user), notice: 'Successfully published the project!'
    else
      flash.now[:alert] = 'Could not update the project, Please try again'
      render :new
    end
  end

  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to user_path(current_user), notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :picture)
  end

  def load_project
    @project = Project.find(params[:id])
  end
end
