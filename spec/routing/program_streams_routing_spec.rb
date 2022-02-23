require 'rails_helper'

RSpec.describe ProgramStreamsController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/program_streams').to route_to('program_streams#index')
    end

    it 'routes to #new' do
      expect(get: '/program_streams/new').to route_to('program_streams#new')
    end

    it 'routes to #show' do
      expect(get: '/program_streams/1').to route_to('program_streams#show', id: '1')
    end

    it 'routes to #edit' do
      expect(get: '/program_streams/1/edit').to route_to('program_streams#edit', id: '1')
    end

    it 'routes to #create' do
      expect(post: '/program_streams').to route_to('program_streams#create')
    end

    it 'routes to #update via PUT' do
      expect(put: '/program_streams/1').to route_to('program_streams#update', id: '1')
    end

    it 'routes to #update via PATCH' do
      expect(patch: '/program_streams/1').to route_to('program_streams#update', id: '1')
    end

    it 'routes to #destroy' do
      expect(delete: '/program_streams/1').to route_to('program_streams#destroy', id: '1')
    end
  end
end
