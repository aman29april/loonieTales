require 'rails_helper'

RSpec.describe "experiences/new", type: :view do
  before(:each) do
    assign(:experience, Experience.new(
      title: "MyString",
      company: "MyString",
      location: "MyString",
      description: "MyString",
      start_date: "MyString",
      end_date: "MyString",
      working_here: "MyString"
    ))
  end

  it "renders new experience form" do
    render

    assert_select "form[action=?][method=?]", experiences_path, "post" do

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
