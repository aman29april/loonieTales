json.extract! company, :id, :name, :logo, :hq, :address, :linkedin, :indeed, :url, :created_at, :updated_at
json.url company_url(company, format: :json)
