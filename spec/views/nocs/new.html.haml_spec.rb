require 'rails_helper'

RSpec.describe 'nocs/new', type: :view do
  before(:each) do
    assign(:noc, Noc.new(
                   code: 1,
                   skill_type: 'MyString',
                   title: 'MyString'
                 ))
  end

  it 'renders new noc form' do
    render

    assert_select 'form[action=?][method=?]', nocs_path, 'post' do
      assert_select 'input[name=?]', 'noc[code]'

      assert_select 'input[name=?]', 'noc[skill_type]'

      assert_select 'input[name=?]', 'noc[title]'
    end
  end
end
