class StaticPagesController < ApplicationController
  before_action :set_static_page, only: %i[show edit update destroy]

  # GET /static_pages or /static_pages.json
  def index
    @static_pages = StaticPage.all
  end

  # GET /static_pages/1 or /static_pages/1.json
  def show
    set_meta_tags @resource.meta_info
  end

  # GET /static_pages/new
  def new
    @resource = StaticPage.new
  end

  # GET /static_pages/1/edit
  def edit; end

  # POST /static_pages or /static_pages.json
  def create
    @resource = current_user.static_pages.build(static_page_params)

    respond_to do |format|
      if @resource.save
        format.html { redirect_to static_page_url(@resource), notice: 'Static page was successfully created.' }
        format.json { render :show, status: :created, location: @resource }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @resource.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /static_pages/1 or /static_pages/1.json
  def update
    respond_to do |format|
      if @resource.update(static_page_params)
        format.html { redirect_to static_page_url(@resource), notice: 'Static page was successfully updated.' }
        format.json { render :show, status: :ok, location: @resource }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @resource.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /static_pages/1 or /static_pages/1.json
  def destroy
    @resource.destroy

    respond_to do |format|
      format.html { redirect_to static_page_path, notice: 'Static page was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_static_page
    @resource = StaticPage.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def static_page_params
    params.require(:static_page).permit(:title, :body, :picture, :meta_keywords, :meta_description)
  end
end
