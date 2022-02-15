require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe '/provinces', type: :request do
  # This should return the minimal set of attributes required to create a valid
  # Province. As you add validations to Province, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    skip('Add a hash of attributes valid for your model')
  end

  let(:invalid_attributes) do
    skip('Add a hash of attributes invalid for your model')
  end

  describe 'GET /index' do
    it 'renders a successful response' do
      Province.create! valid_attributes
      get provinces_url
      expect(response).to be_successful
    end
  end

  describe 'GET /show' do
    it 'renders a successful response' do
      province = Province.create! valid_attributes
      get province_url(province)
      expect(response).to be_successful
    end
  end

  describe 'GET /new' do
    it 'renders a successful response' do
      get new_province_url
      expect(response).to be_successful
    end
  end

  describe 'GET /edit' do
    it 'renders a successful response' do
      province = Province.create! valid_attributes
      get edit_province_url(province)
      expect(response).to be_successful
    end
  end

  describe 'POST /create' do
    context 'with valid parameters' do
      it 'creates a new Province' do
        expect do
          post provinces_url, params: { province: valid_attributes }
        end.to change(Province, :count).by(1)
      end

      it 'redirects to the created province' do
        post provinces_url, params: { province: valid_attributes }
        expect(response).to redirect_to(province_url(Province.last))
      end
    end

    context 'with invalid parameters' do
      it 'does not create a new Province' do
        expect do
          post provinces_url, params: { province: invalid_attributes }
        end.to change(Province, :count).by(0)
      end

      it "renders a successful response (i.e. to display the 'new' template)" do
        post provinces_url, params: { province: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe 'PATCH /update' do
    context 'with valid parameters' do
      let(:new_attributes) do
        skip('Add a hash of attributes valid for your model')
      end

      it 'updates the requested province' do
        province = Province.create! valid_attributes
        patch province_url(province), params: { province: new_attributes }
        province.reload
        skip('Add assertions for updated state')
      end

      it 'redirects to the province' do
        province = Province.create! valid_attributes
        patch province_url(province), params: { province: new_attributes }
        province.reload
        expect(response).to redirect_to(province_url(province))
      end
    end

    context 'with invalid parameters' do
      it "renders a successful response (i.e. to display the 'edit' template)" do
        province = Province.create! valid_attributes
        patch province_url(province), params: { province: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe 'DELETE /destroy' do
    it 'destroys the requested province' do
      province = Province.create! valid_attributes
      expect do
        delete province_url(province)
      end.to change(Province, :count).by(-1)
    end

    it 'redirects to the provinces list' do
      province = Province.create! valid_attributes
      delete province_url(province)
      expect(response).to redirect_to(provinces_url)
    end
  end
end