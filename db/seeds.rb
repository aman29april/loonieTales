# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Default User
user = User.create(email: 'aman29april@gmail.com', password: 'new life', password_confirmation: 'new life')

# About us page
user.static_pages.build({ title: 'About Us', body: '', meta_keywords: [], meta_description: '' }).save
