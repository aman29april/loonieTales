require 'rails_helper'

RSpec.describe LmiaJobsController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/lmia_jobs').to route_to('lmia_jobs#index')
    end

    it 'routes to #new' do
      expect(get: '/lmia_jobs/new').to route_to('lmia_jobs#new')
    end

    it 'routes to #show' do
      expect(get: '/lmia_jobs/1').to route_to('lmia_jobs#show', id: '1')
    end

    it 'routes to #edit' do
      expect(get: '/lmia_jobs/1/edit').to route_to('lmia_jobs#edit', id: '1')
    end

    it 'routes to #create' do
      expect(post: '/lmia_jobs').to route_to('lmia_jobs#create')
    end

    it 'routes to #update via PUT' do
      expect(put: '/lmia_jobs/1').to route_to('lmia_jobs#update', id: '1')
    end

    it 'routes to #update via PATCH' do
      expect(patch: '/lmia_jobs/1').to route_to('lmia_jobs#update', id: '1')
    end

    it 'routes to #destroy' do
      expect(delete: '/lmia_jobs/1').to route_to('lmia_jobs#destroy', id: '1')
    end
  end
end
