require 'rails_helper'

RSpec.describe "experiences/edit", type: :view do
  before(:each) do
    @experience = assign(:experience, Experience.create!(
      title: "MyString",
      company: "MyString",
      location: "MyString",
      description: "MyString",
      start_date: "MyString",
      end_date: "MyString",
      working_here: "MyString"
    ))
  end

  it "renders the edit experience form" do
    render

    assert_select "form[action=?][method=?]", experience_path(@experience), "post" do

      assert_select "input[name=?]", "experience[title]"

      assert_select "input[name=?]", "experience[company]"

      assert_select "input[name=?]", "experience[location]"

      assert_select "input[name=?]", "experience[description]"

      assert_select "input[name=?]", "experience[start_date]"

      assert_select "input[name=?]", "experience[end_date]"

      assert_select "input[name=?]", "experience[working_here]"
    end
  end
end
