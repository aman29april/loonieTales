require 'rails_helper'

RSpec.describe 'nocs/index', type: :view do
  before(:each) do
    assign(:nocs, [
             Noc.create!(
               code: 2,
               skill_type: 'Skill Type',
               title: 'Title'
             ),
             Noc.create!(
               code: 2,
               skill_type: 'Skill Type',
               title: 'Title'
             )
           ])
  end

  it 'renders a list of nocs' do
    render
    assert_select 'tr>td', text: 2.to_s, count: 2
    assert_select 'tr>td', text: 'Skill Type'.to_s, count: 2
    assert_select 'tr>td', text: 'Title'.to_s, count: 2
  end
end
