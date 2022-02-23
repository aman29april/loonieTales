require 'rails_helper'

RSpec.describe 'lmia_jobs/new', type: :view do
  before(:each) do
    assign(:lmia_job, LmiaJob.new(
                        company: nil,
                        noc: nil,
                        ProgramStream: nil,
                        positions_approved: 1,
                        year: 1,
                        month: 1,
                        province: 'MyString'
                      ))
  end

  it 'renders new lmia_job form' do
    render

    assert_select 'form[action=?][method=?]', lmia_jobs_path, 'post' do
      assert_select 'input[name=?]', 'lmia_job[company_id]'

      assert_select 'input[name=?]', 'lmia_job[noc_id]'

      assert_select 'input[name=?]', 'lmia_job[ProgramStream_id]'

      assert_select 'input[name=?]', 'lmia_job[positions_approved]'

      assert_select 'input[name=?]', 'lmia_job[year]'

      assert_select 'input[name=?]', 'lmia_job[month]'

      assert_select 'input[name=?]', 'lmia_job[province]'
    end
  end
end
