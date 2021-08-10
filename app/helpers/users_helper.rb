module UsersHelper
  def avatar_for(user, options = { size: 80 })
    size = options[:size]
    style = options[:style]
    img = if user.avatar? && size <= 80
            user.avatar.url(:thumb)
          elsif user.avatar?
            user.avatar.url
          elsif user.respond_to?(:avatar_url) && user.avatar_url.present?
            user.avatar_url
          else
            user.class.default_avatar
          end
    image_tag img, width: size, height: size, class: 'avatar-image', style: style
  end
end
