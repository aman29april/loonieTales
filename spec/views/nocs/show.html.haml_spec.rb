require 'rails_helper'

RSpec.describe 'nocs/show', type: :view do
  before(:each) do
    @noc = assign(:noc, Noc.create!(
                          code: 2,
                          skill_type: 'Skill Type',
                          title: 'Title'
                        ))
  end

  it 'renders attributes in <p>' do
    render
    expect(rendered).to match(/2/)
    expect(rendered).to match(/Skill Type/)
    expect(rendered).to match(/Title/)
  end
end
