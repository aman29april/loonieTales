require 'rails_helper'

RSpec.describe 'companies/edit', type: :view do
  before(:each) do
    @company = assign(:company, Company.create!(
                                  name: 'MyString',
                                  logo: 'MyString',
                                  hq: 'MyString',
                                  address: 'MyString',
                                  linkedin: 'MyString',
                                  indeed: 'MyString',
                                  url: 'MyString'
                                ))
  end

  it 'renders the edit company form' do
    render

    assert_select 'form[action=?][method=?]', company_path(@company), 'post' do
      assert_select 'input[name=?]', 'company[name]'

      assert_select 'input[name=?]', 'company[logo]'

      assert_select 'input[name=?]', 'company[hq]'

      assert_select 'input[name=?]', 'company[address]'

      assert_select 'input[name=?]', 'company[linkedin]'

      assert_select 'input[name=?]', 'company[indeed]'

      assert_select 'input[name=?]', 'company[url]'
    end
  end
end
