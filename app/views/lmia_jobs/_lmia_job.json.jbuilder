json.extract! lmia_job, :id, :company_id, :noc_id, :ProgramStream_id, :positions_approved, :year, :month, :province,
              :created_at, :updated_at
json.url lmia_job_url(lmia_job, format: :json)
