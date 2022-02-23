module RedisStore
  REDIS_HASH_KEY = "#{ENV['RAILS_ENV']}_yt_videos"
  REDIS_YT_EXPIRY = "#{ENV['RAILS_ENV']}_yt_videos_expiry"

  def self.add_all(videos)
    $redis.set(REDIS_YT_EXPIRY, Time.now + 1.days)
    videos.reverse.each do |video|
      $redis.sadd(REDIS_HASH_KEY, video.to_json)
    end
  end

  def self.videos
    delete_if_expired && return
    $redis.smembers(REDIS_HASH_KEY).map { |v| JSON.parse(v, symbolize_names: true) }
  end

  def self.delete_if_expired
    expiry = $redis.get(REDIS_YT_EXPIRY)
    return if expiry.blank?

    if DateTime.parse(expiry).past?
      delete_all
      true
    end
  end

  def self.delete_all
    $redis.del(REDIS_YT_EXPIRY)
    $redis.del(REDIS_HASH_KEY)
  end
end
