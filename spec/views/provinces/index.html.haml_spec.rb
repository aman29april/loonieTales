require 'rails_helper'

RSpec.describe 'provinces/index', type: :view do
  before(:each) do
    assign(:provinces, [
             Province.create!(
               name: 'Name'
             ),
             Province.create!(
               name: 'Name'
             )
           ])
  end

  it 'renders a list of provinces' do
    render
    assert_select 'tr>td', text: 'Name'.to_s, count: 2
  end
end
