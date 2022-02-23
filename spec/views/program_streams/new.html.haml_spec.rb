require 'rails_helper'

RSpec.describe 'program_streams/new', type: :view do
  before(:each) do
    assign(:program_stream, ProgramStream.new(
                              name: 'MyString'
                            ))
  end

  it 'renders new program_stream form' do
    render

    assert_select 'form[action=?][method=?]', program_streams_path, 'post' do
      assert_select 'input[name=?]', 'program_stream[name]'
    end
  end
end
