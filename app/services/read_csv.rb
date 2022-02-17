require 'csv'

LmiaJobStruct = Struct.new(:company, :noc, :program_stream, :positions_approved, :occupation, :province, :address,
                           :year, :month, keyword_init: true)

class ReadCsv
  attr_reader :error

  def initialize(file)
    @file = file
    @csv = CSV.read(file, headers: true, header_converters: :symbol)
  end

  def call(filter_params)
    return if @error.present?

    result = []
    @csv.map do |row|
      job = row_attributes(row)
      result << job if match?(job, filter_params)
    end
    result
  rescue ActiveRecord::RecordInvalid => e
    fail!(e.message)
  end

  def match?(job, params)
    return true if params.to_enum.all? { |_k, v| v.blank? }

    match = false
    if params[:NOC].present?
      match = search_nocs(params[:NOC]).include?(job.noc)
      return match if match
    elsif params[:province].present?
      match = job.province == params[:province]
      return match if match
    elsif params[:company].present?
      match = (job.company =~ /#{Regexp.quote(params[:company])}/i)
      return match if match
    end
  end

  def search_nocs(nocs)
    nocs.split(',').map { |s| s.strip }
  end

  def success?
    @error.nil?
  end

  private

  def row_attributes(row)
    occupation = row[:occupation].split('-')
    LmiaJobStruct.new(company: row[:employer],
                      province: row[:provinceterritory],
                      program_stream: row[:program_stream],
                      address: row[:address],
                      noc: occupation[0],
                      occupation: occupation[1],
                      positions_approved: row[:approved_positions], year: 2021)
  end

  def fail!(error)
    @error = error
  end
end