class YoutubeService
  def self.get_videos
    cached_data = RedisStore.videos
    if cached_data.blank?
      data = get_videos_by_api
      RedisStore.add_all(data)
      return data
    end
    cached_data
  end

  def self.get_videos_by_api
    Yt.configuration.api_key = 'AIzaSyBpovH3EHfd5alwzNsrXSN9hfodB8qkT2w'
    channel = Yt::Channel.new id: 'UCnsK1dkFytRoVywmcRBu6Rg'
    videos = channel.videos
    data = videos.map do |video|
      video_data = video.snippet.data
      {
        id: video.id,
        title: video_data['title'],
        thumbnail: video_data['thumbnails']['high']['url'],
        url: "https://www.youtube.com/video/#{video.id}",
        embed_url: "https://www.youtube.com/embed/#{video.id}"
      }
    end
  end
end
