require 'rails_helper'

RSpec.describe 'companies/new', type: :view do
  before(:each) do
    assign(:company, Company.new(
                       name: 'MyString',
                       logo: 'MyString',
                       hq: 'MyString',
                       address: 'MyString',
                       linkedin: 'MyString',
                       indeed: 'MyString',
                       url: 'MyString'
                     ))
  end

  it 'renders new company form' do
    render

    assert_select 'form[action=?][method=?]', companies_path, 'post' do
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
