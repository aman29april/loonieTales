require 'rails_helper'

RSpec.describe 'companies/index', type: :view do
  before(:each) do
    assign(:companies, [
             Company.create!(
               name: 'Name',
               logo: 'Logo',
               hq: 'Hq',
               address: 'Address',
               linkedin: 'Linkedin',
               indeed: 'Indeed',
               url: 'Url'
             ),
             Company.create!(
               name: 'Name',
               logo: 'Logo',
               hq: 'Hq',
               address: 'Address',
               linkedin: 'Linkedin',
               indeed: 'Indeed',
               url: 'Url'
             )
           ])
  end

  it 'renders a list of companies' do
    render
    assert_select 'tr>td', text: 'Name'.to_s, count: 2
    assert_select 'tr>td', text: 'Logo'.to_s, count: 2
    assert_select 'tr>td', text: 'Hq'.to_s, count: 2
    assert_select 'tr>td', text: 'Address'.to_s, count: 2
    assert_select 'tr>td', text: 'Linkedin'.to_s, count: 2
    assert_select 'tr>td', text: 'Indeed'.to_s, count: 2
    assert_select 'tr>td', text: 'Url'.to_s, count: 2
  end
end
