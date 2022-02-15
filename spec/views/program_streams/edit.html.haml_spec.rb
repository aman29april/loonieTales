require 'rails_helper'

RSpec.describe 'program_streams/edit', type: :view do
  before(:each) do
    @program_stream = assign(:program_stream, ProgramStream.create!(
                                                name: 'MyString'
                                              ))
  end

  it 'renders the edit program_stream form' do
    render

    assert_select 'form[action=?][method=?]', program_stream_path(@program_stream), 'post' do
      assert_select 'input[name=?]', 'program_stream[name]'
    end
  end
end
