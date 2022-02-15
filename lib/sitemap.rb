require 'rubygems'
require 'sitemap_generator'

SitemapGenerator::Sitemap.default_host = 'https://loonietales.herokuapp.com'
SitemapGenerator::Sitemap.create do
  add '/', changefreq: 'daily', priority: 0.9
  # add '/contact_us', :changefreq => 'weekly'
end

SitemapGenerator::Sitemap.ping_search_engines
