require 'rails_helper'

RSpec.describe NocsController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/nocs').to route_to('nocs#index')
    end

    it 'routes to #new' do
      expect(get: '/nocs/new').to route_to('nocs#new')
    end

    it 'routes to #show' do
      expect(get: '/nocs/1').to route_to('nocs#show', id: '1')
    end

    it 'routes to #edit' do
      expect(get: '/nocs/1/edit').to route_to('nocs#edit', id: '1')
    end

    it 'routes to #create' do
      expect(post: '/nocs').to route_to('nocs#create')
    end

    it 'routes to #update via PUT' do
      expect(put: '/nocs/1').to route_to('nocs#update', id: '1')
    end

    it 'routes to #update via PATCH' do
      expect(patch: '/nocs/1').to route_to('nocs#update', id: '1')
    end

    it 'routes to #destroy' do
      expect(delete: '/nocs/1').to route_to('nocs#destroy', id: '1')
    end
  end
end
