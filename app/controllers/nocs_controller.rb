class NocsController < ApplicationController
  before_action :set_noc, only: %i[show edit update destroy]

  # GET /nocs or /nocs.json
  def index
    @nocs = Noc.all
  end

  # GET /nocs/1 or /nocs/1.json
  def show; end

  # GET /nocs/new
  def new
    @noc = Noc.new
  end

  # GET /nocs/1/edit
  def edit; end

  # POST /nocs or /nocs.json
  def create
    @noc = Noc.new(noc_params)

    respond_to do |format|
      if @noc.save
        format.html { redirect_to noc_url(@noc), notice: 'Noc was successfully created.' }
        format.json { render :show, status: :created, location: @noc }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @noc.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /nocs/1 or /nocs/1.json
  def update
    respond_to do |format|
      if @noc.update(noc_params)
        format.html { redirect_to noc_url(@noc), notice: 'Noc was successfully updated.' }
        format.json { render :show, status: :ok, location: @noc }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @noc.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /nocs/1 or /nocs/1.json
  def destroy
    @noc.destroy

    respond_to do |format|
      format.html { redirect_to nocs_url, notice: 'Noc was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_noc
    @noc = Noc.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def noc_params
    params.require(:noc).permit(:code, :skill_type, :title)
  end
end
