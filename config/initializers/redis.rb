require 'redis'

Redis.current = Redis.new(url: ENV['REDIS_URL'],
                          db: ENV['REDIS_DB'],
                          ssl_params: { verify_mode: OpenSSL::SSL::VERIFY_NONE },
                          reconnect_attempts: 1)

$redis = Redis::Namespace.new('my_app', redis: Redis.current)
