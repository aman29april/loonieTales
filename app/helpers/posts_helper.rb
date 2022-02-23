module PostsHelper
  def post_length_in_minutes(body)
    min = body.split(' ').size / 250
    if min == 0
      'less than a minute read'
    else
      "#{min} min read"
    end
  end

  # blacklisting
  def remove_javascript(html)
    html.gsub(/<script.*?>/i, '')
        .gsub(%r{</script>}i, '')
        .gsub(/javascript:/i, '')
        .gsub(/on\w+=/i, '')
  end

  # whitelisting
  # TODO: this won't work for embedded video
  def sanitize_html(html)
    sanitize(html, tags: %w[p b i u blockquote br h2 h3 div a img figure figcaption iframe html],
                   attributes: %w[class href style])
  end

  def is_expand?
    params[:expand] == 'true'
  end

  def post_body(post, options = {})
    return post.body if options[:expand] == 'true'

    post.body_text.length < 500 ? post.body : post.lead.html_safe
  end
end
