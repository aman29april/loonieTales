namespace :post_task do
  desc 'Regenrate lead for posts'
  task regenrate_lead: :environment do
    Post.find_each do |post|
      post.generate_lead!
      post.save
    end
  end
end
