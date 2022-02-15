require 'rails_helper'

RSpec.describe 'program_streams/index', type: :view do
  before(:each) do
    assign(:program_streams, [
             ProgramStream.create!(
               name: 'Name'
             ),
             ProgramStream.create!(
               name: 'Name'
             )
           ])
  end

  it 'renders a list of program_streams' do
    render
    assert_select 'tr>td', text: 'Name'.to_s, count: 2
  end
end
