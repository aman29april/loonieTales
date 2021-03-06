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

RSpec.describe '/nocs', type: :request do
  # This should return the minimal set of attributes required to create a valid
  # Noc. As you add validations to Noc, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    skip('Add a hash of attributes valid for your model')
  end

  let(:invalid_attributes) do
    skip('Add a hash of attributes invalid for your model')
  end

  describe 'GET /index' do
    it 'renders a successful response' do
      Noc.create! valid_attributes
      get nocs_url
      expect(response).to be_successful
    end
  end

  describe 'GET /show' do
    it 'renders a successful response' do
      noc = Noc.create! valid_attributes
      get noc_url(noc)
      expect(response).to be_successful
    end
  end

  describe 'GET /new' do
    it 'renders a successful response' do
      get new_noc_url
      expect(response).to be_successful
    end
  end

  describe 'GET /edit' do
    it 'renders a successful response' do
      noc = Noc.create! valid_attributes
      get edit_noc_url(noc)
      expect(response).to be_successful
    end
  end

  describe 'POST /create' do
    context 'with valid parameters' do
      it 'creates a new Noc' do
        expect do
          post nocs_url, params: { noc: valid_attributes }
        end.to change(Noc, :count).by(1)
      end

      it 'redirects to the created noc' do
        post nocs_url, params: { noc: valid_attributes }
        expect(response).to redirect_to(noc_url(Noc.last))
      end
    end

    context 'with invalid parameters' do
      it 'does not create a new Noc' do
        expect do
          post nocs_url, params: { noc: invalid_attributes }
        end.to change(Noc, :count).by(0)
      end

      it "renders a successful response (i.e. to display the 'new' template)" do
        post nocs_url, params: { noc: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe 'PATCH /update' do
    context 'with valid parameters' do
      let(:new_attributes) do
        skip('Add a hash of attributes valid for your model')
      end

      it 'updates the requested noc' do
        noc = Noc.create! valid_attributes
        patch noc_url(noc), params: { noc: new_attributes }
        noc.reload
        skip('Add assertions for updated state')
      end

      it 'redirects to the noc' do
        noc = Noc.create! valid_attributes
        patch noc_url(noc), params: { noc: new_attributes }
        noc.reload
        expect(response).to redirect_to(noc_url(noc))
      end
    end

    context 'with invalid parameters' do
      it "renders a successful response (i.e. to display the 'edit' template)" do
        noc = Noc.create! valid_attributes
        patch noc_url(noc), params: { noc: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe 'DELETE /destroy' do
    it 'destroys the requested noc' do
      noc = Noc.create! valid_attributes
      expect do
        delete noc_url(noc)
      end.to change(Noc, :count).by(-1)
    end

    it 'redirects to the nocs list' do
      noc = Noc.create! valid_attributes
      delete noc_url(noc)
      expect(response).to redirect_to(nocs_url)
    end
  end
end
