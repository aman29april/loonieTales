class UsersController < ApplicationController
  before_action :authenticate_user!, only: %i[edit update]
  before_action :authorize_user, only: %i[edit update]
  before_action :set_user, only: %i[show edit update posts]

  def show
    # @followers_count = @user.followers.count
    # @following_count = @user.following.count
    @latest_posts = @user.posts.latest(6).published
    @recommended_posts = @user.liked_posts.latest(4).published.includes(:user)
    set_meta_tags @user.meta_info
  end

  def edit; end

  def update
    if @user.update(user_params)
      redirect_to @user
    else
      render :edit, alert: 'Could not update, Please try again'
    end
  end

  def posts
    @posts = Post.by_user(@user).paginate(page: params[:page]).order(created_at: :desc)
  end

  private

  def set_user
    @user = User.includes(:projects, :experiences).find(params[:id])
  end

  def user_params
    params.require(:user).permit(:description, :avatar, :location, :linkedin, :mobile,
                                 :github, :first_name, :last_name, :skills, :resume, :hobbies, :languages)
  end

  def authorize_user
    # redirect_to root_url unless current_user.slug == params[:id]
  end
end
