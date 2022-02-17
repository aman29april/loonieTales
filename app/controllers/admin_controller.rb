class AdminController < ApplicationController
  def index; end

  def delete_cache
    $redis.flushall
    redirect_to admin_index_path, notice: 'Successfully cleared the redis!'
  end
end
