require 'rails_helper'

RSpec.describe 'provinces/show', type: :view do
  before(:each) do
    @province = assign(:province, Province.create!(
                                    name: 'Name'
                                  ))
  end

  it 'renders attributes in <p>' do
    render
    expect(rendered).to match(/Name/)
  end
end
