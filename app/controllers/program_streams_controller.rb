class ProgramStreamsController < ApplicationController
  before_action :set_program_stream, only: %i[show edit update destroy]

  # GET /program_streams or /program_streams.json
  def index
    @program_streams = ProgramStream.all
  end

  # GET /program_streams/1 or /program_streams/1.json
  def show; end

  # GET /program_streams/new
  def new
    @program_stream = ProgramStream.new
  end

  # GET /program_streams/1/edit
  def edit; end

  # POST /program_streams or /program_streams.json
  def create
    @program_stream = ProgramStream.new(program_stream_params)

    respond_to do |format|
      if @program_stream.save
        format.html do
          redirect_to program_stream_url(@program_stream), notice: 'Program stream was successfully created.'
        end
        format.json { render :show, status: :created, location: @program_stream }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @program_stream.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /program_streams/1 or /program_streams/1.json
  def update
    respond_to do |format|
      if @program_stream.update(program_stream_params)
        format.html do
          redirect_to program_stream_url(@program_stream), notice: 'Program stream was successfully updated.'
        end
        format.json { render :show, status: :ok, location: @program_stream }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @program_stream.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /program_streams/1 or /program_streams/1.json
  def destroy
    @program_stream.destroy

    respond_to do |format|
      format.html { redirect_to program_streams_url, notice: 'Program stream was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_program_stream
    @program_stream = ProgramStream.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def program_stream_params
    params.require(:program_stream).permit(:name)
  end
end
