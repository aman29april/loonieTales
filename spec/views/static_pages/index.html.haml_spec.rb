require 'rails_helper'

RSpec.describe 'static_pages/index', type: :view do
  before(:each) do
    assign(:static_pages, [
             StaticPage.create!(
               title: 'Title',
               body: 'Body',
               picture: 'Picture',
               meta_keywords: 'Meta Keywords',
               meta_description: 'Meta Description',
               user: nil
             ),
             StaticPage.create!(
               title: 'Title',
               body: 'Body',
               picture: 'Picture',
               meta_keywords: 'Meta Keywords',
               meta_description: 'Meta Description',
               user: nil
             )
           ])
  end

  it 'renders a list of static_pages' do
    render
    assert_select 'tr>td', text: 'Title'.to_s, count: 2
    assert_select 'tr>td', text: 'Body'.to_s, count: 2
    assert_select 'tr>td', text: 'Picture'.to_s, count: 2
    assert_select 'tr>td', text: 'Meta Keywords'.to_s, count: 2
    assert_select 'tr>td', text: 'Meta Description'.to_s, count: 2
    assert_select 'tr>td', text: nil.to_s, count: 2
  end
end
