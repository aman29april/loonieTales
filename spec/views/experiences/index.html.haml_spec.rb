require 'rails_helper'

RSpec.describe 'experiences/index', type: :view do
  before(:each) do
    assign(:experiences, [
             Experience.create!(
               title: 'Title',
               company: 'Company',
               location: 'Location',
               description: 'Description',
               start_date: 'Start Date',
               end_date: 'End Date',
               working_here: 'Working Here'
             ),
             Experience.create!(
               title: 'Title',
               company: 'Company',
               location: 'Location',
               description: 'Description',
               start_date: 'Start Date',
               end_date: 'End Date',
               working_here: 'Working Here'
             )
           ])
  end

  it 'renders a list of experiences' do
    render
    assert_select 'tr>td', text: 'Title'.to_s, count: 2
    assert_select 'tr>td', text: 'Company'.to_s, count: 2
    assert_select 'tr>td', text: 'Location'.to_s, count: 2
    assert_select 'tr>td', text: 'Description'.to_s, count: 2
    assert_select 'tr>td', text: 'Start Date'.to_s, count: 2
    assert_select 'tr>td', text: 'End Date'.to_s, count: 2
    assert_select 'tr>td', text: 'Working Here'.to_s, count: 2
  end
end
