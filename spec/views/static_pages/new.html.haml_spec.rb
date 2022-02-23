require 'rails_helper'

RSpec.describe 'static_pages/new', type: :view do
  before(:each) do
    assign(:static_page, StaticPage.new(
                           title: 'MyString',
                           body: 'MyString',
                           picture: 'MyString',
                           meta_keywords: 'MyString',
                           meta_description: 'MyString',
                           user: nil
                         ))
  end

  it 'renders new static_page form' do
    render

    assert_select 'form[action=?][method=?]', static_pages_path, 'post' do
      assert_select 'input[name=?]', 'static_page[title]'

      assert_select 'input[name=?]', 'static_page[body]'

      assert_select 'input[name=?]', 'static_page[picture]'

      assert_select 'input[name=?]', 'static_page[meta_keywords]'

      assert_select 'input[name=?]', 'static_page[meta_description]'

      assert_select 'input[name=?]', 'static_page[user_id]'
    end
  end
end
