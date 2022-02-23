require 'rails_helper'

RSpec.describe 'lmia_jobs/show', type: :view do
  before(:each) do
    @lmia_job = assign(:lmia_job, LmiaJob.create!(
                                    company: nil,
                                    noc: nil,
                                    ProgramStream: nil,
                                    positions_approved: 2,
                                    year: 3,
                                    month: 4,
                                    province: 'Province'
                                  ))
  end

  it 'renders attributes in <p>' do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(/4/)
    expect(rendered).to match(/Province/)
  end
end
