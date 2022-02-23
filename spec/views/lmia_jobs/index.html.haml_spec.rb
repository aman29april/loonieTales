require 'rails_helper'

RSpec.describe 'lmia_jobs/index', type: :view do
  before(:each) do
    assign(:lmia_jobs, [
             LmiaJob.create!(
               company: nil,
               noc: nil,
               ProgramStream: nil,
               positions_approved: 2,
               year: 3,
               month: 4,
               province: 'Province'
             ),
             LmiaJob.create!(
               company: nil,
               noc: nil,
               ProgramStream: nil,
               positions_approved: 2,
               year: 3,
               month: 4,
               province: 'Province'
             )
           ])
  end

  it 'renders a list of lmia_jobs' do
    render
    assert_select 'tr>td', text: nil.to_s, count: 2
    assert_select 'tr>td', text: nil.to_s, count: 2
    assert_select 'tr>td', text: nil.to_s, count: 2
    assert_select 'tr>td', text: 2.to_s, count: 2
    assert_select 'tr>td', text: 3.to_s, count: 2
    assert_select 'tr>td', text: 4.to_s, count: 2
    assert_select 'tr>td', text: 'Province'.to_s, count: 2
  end
end
