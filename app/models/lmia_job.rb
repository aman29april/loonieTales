class LmiaJob < ApplicationRecord
  belongs_to :company
  belongs_to :noc
  belongs_to :ProgramStream
end
