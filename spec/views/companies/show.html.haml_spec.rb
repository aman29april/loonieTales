require 'rails_helper'

RSpec.describe 'companies/show', type: :view do
  before(:each) do
    @company = assign(:company, Company.create!(
                                  name: 'Name',
                                  logo: 'Logo',
                                  hq: 'Hq',
                                  address: 'Address',
                                  linkedin: 'Linkedin',
                                  indeed: 'Indeed',
                                  url: 'Url'
                                ))
  end

  it 'renders attributes in <p>' do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Logo/)
    expect(rendered).to match(/Hq/)
    expect(rendered).to match(/Address/)
    expect(rendered).to match(/Linkedin/)
    expect(rendered).to match(/Indeed/)
    expect(rendered).to match(/Url/)
  end
end
