require 'rails_helper'

RSpec.describe 'static_pages/edit', type: :view do
  before(:each) do
    @static_page = assign(:static_page, StaticPage.create!(
                                          title: 'MyString',
                                          body: 'MyString',
                                          picture: 'MyString',
                                          meta_keywords: 'MyString',
                                          meta_description: 'MyString',
                                          user: nil
                                        ))
  end

  it 'renders the edit static_page form' do
    render

    assert_select 'form[action=?][method=?]', static_page_path(@static_page), 'post' do
      assert_select 'input[name=?]', 'static_page[title]'

      assert_select 'input[name=?]', 'static_page[body]'

      assert_select 'input[name=?]', 'static_page[picture]'

      assert_select 'input[name=?]', 'static_page[meta_keywords]'

      assert_select 'input[name=?]', 'static_page[meta_description]'

      assert_select 'input[name=?]', 'static_page[user_id]'
    end
  end
end
