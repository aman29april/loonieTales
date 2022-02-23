require 'rails_helper'

RSpec.describe 'static_pages/show', type: :view do
  before(:each) do
    @static_page = assign(:static_page, StaticPage.create!(
                                          title: 'Title',
                                          body: 'Body',
                                          picture: 'Picture',
                                          meta_keywords: 'Meta Keywords',
                                          meta_description: 'Meta Description',
                                          user: nil
                                        ))
  end

  it 'renders attributes in <p>' do
    render
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/Body/)
    expect(rendered).to match(/Picture/)
    expect(rendered).to match(/Meta Keywords/)
    expect(rendered).to match(/Meta Description/)
    expect(rendered).to match(//)
  end
end
