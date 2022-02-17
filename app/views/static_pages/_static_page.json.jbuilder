json.extract! static_page, :id, :title, :body, :picture, :meta_keywords, :meta_description, :user_id, :created_at,
              :updated_at
json.url static_page_url(static_page, format: :json)
