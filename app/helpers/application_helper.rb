module ApplicationHelper
  def admin_signed_in?
    user_signed_in?
  end

  def follow_button_for(user)
    if user_signed_in?
      unless current_user?(user)
        react_component('UserFollowButton', { following: current_user.following?(user), followed_id: user.id })
      end
    else
      react_component('UserFollowButton', { isSignedIn: false })
    end
  end

  def follow_tag_button_for(tag)
    if user_signed_in?
      react_component('TagFollowButton', { following: current_user.following_tag?(tag), tag_id: tag.id })
    else
      link_to 'Follow', '', class: 'pull-right button green-border-button follow-button',
                            data: { behavior: 'trigger-overlay' }
    end
  end

  def feature_tag_button_for(tag)
    if tag.featured?
      render partial: 'admin/unfeature_tag_button', locals: { tag: tag }
    else
      render partial: 'admin/feature_tag_button', locals: { tag: tag }
    end
  end

  def feature_post_button_for(post)
    if post.featured?
      render partial: 'admin/unfeature_post_button', locals: { post: post }
    else
      render partial: 'admin/feature_post_button', locals: { post: post }
    end
  end

  def nav_link_to(text, url, options = {})
    options[:class] ||= ''
    options[:class] += ' active' if current_page?(url)
    options[:class].strip!
    link_to text, url, options
  end

  def create_post_options
    if params[:controller] == 'tags'
      { tags: params[:id] }
    else
      {}
    end
  end

  def random_tag_class(index: nil)
    tags = %w[fashion
              online-tutorial
              marketing
              javaScript
              laravel
              magento
              ux-design
              wordpress
              woocommerce
              health
              travel
              business
              tech
              food
              lifesytle
              doctor]

    index.present? && tags[index].present? ? tags[index] : tags.sample
  end
end
