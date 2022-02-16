class Province < ApplicationRecord
  def self.all
    [

      'Alberta', 'British Columbia', 'Ontario',
      'Nova Scotia',
      'Quebec', 'Manitoba', 'Newfoundland and Labrador', 'Prince Edward Island', 'New Brunswick'
    ]
  end
end
