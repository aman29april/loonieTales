class LmiaJobsController < ApplicationController
  before_action :set_lmia_job, only: %i[show edit update destroy]

  # GET /lmia_jobs or /lmia_jobs.json
  def index
    # @lmia_jobs = LmiaJob.all
    #
    # File.read()
    @lmia_jobs = ReadCsv.new("#{Rails.root}/app/assets/csv/LMIAQ3.csv").call(search_params)
    set_meta_tags meta_info_from_locals(prefix: 'jobs.lmia')
  end

  # GET /lmia_jobs/1 or /lmia_jobs/1.json
  def show; end

  # GET /lmia_jobs/new
  def new
    @lmia_job = LmiaJob.new
  end

  # GET /lmia_jobs/1/edit
  def edit; end

  # POST /lmia_jobs or /lmia_jobs.json
  def create
    @lmia_job = LmiaJob.new(lmia_job_params)

    respond_to do |format|
      if @lmia_job.save
        format.html { redirect_to lmia_job_url(@lmia_job), notice: 'Lmia job was successfully created.' }
        format.json { render :show, status: :created, location: @lmia_job }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @lmia_job.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /lmia_jobs/1 or /lmia_jobs/1.json
  def update
    respond_to do |format|
      if @lmia_job.update(lmia_job_params)
        format.html { redirect_to lmia_job_url(@lmia_job), notice: 'Lmia job was successfully updated.' }
        format.json { render :show, status: :ok, location: @lmia_job }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @lmia_job.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lmia_jobs/1 or /lmia_jobs/1.json
  def destroy
    @lmia_job.destroy

    respond_to do |format|
      format.html { redirect_to lmia_jobs_url, notice: 'Lmia job was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_lmia_job
    @lmia_job = LmiaJob.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def lmia_job_params
    params.require(:lmia_job).permit(:company_id, :noc_id, :ProgramStream_id, :positions_approved, :year, :month,
                                     :province)
  end

  def search_params
    params.permit(:NOC, :company, :province)
  end
end
