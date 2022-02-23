require 'rails_helper'

RSpec.describe 'provinces/edit', type: :view do
  before(:each) do
    @province = assign(:province, Province.create!(
                                    name: 'MyString'
                                  ))
  end

  it 'renders the edit province form' do
    render

    assert_select 'form[action=?][method=?]', province_path(@province), 'post' do
      assert_select 'input[name=?]', 'province[name]'
    end
  end
end
