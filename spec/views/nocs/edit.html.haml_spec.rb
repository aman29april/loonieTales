require 'rails_helper'

RSpec.describe 'nocs/edit', type: :view do
  before(:each) do
    @noc = assign(:noc, Noc.create!(
                          code: 1,
                          skill_type: 'MyString',
                          title: 'MyString'
                        ))
  end

  it 'renders the edit noc form' do
    render

    assert_select 'form[action=?][method=?]', noc_path(@noc), 'post' do
      assert_select 'input[name=?]', 'noc[code]'

      assert_select 'input[name=?]', 'noc[skill_type]'

      assert_select 'input[name=?]', 'noc[title]'
    end
  end
end
