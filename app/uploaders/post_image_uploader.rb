# require 'carrierwave/processing/mime_types'

class PostImageUploader < CarrierWave::Uploader::Base
  # include CarrierWave::MiniMagick
  include Cloudinary::CarrierWave
  # include CarrierWave::MimeTypes
  # process :set_content_type

  process resize_to_limit: [1024, 512]
  process convert: 'jpg'
  process tags: ['post_picture']
  cloudinary_transformation quality: 80

  version :thumb do
    process resize_to_fill: [512, 256]
    process convert: 'jpg'
    cloudinary_transformation quality: 90
  end

  # storage :file

  def store_dir
    "uploads/project/#{mounted_as}/#{model.id}/"
  end

  def extension_white_list
    %w[jpg gif png jpeg]
  end

  def filename
    "#{secure_token}.#{file.extension}" if original_filename.present?
  end

  def public_id
    model.slug
  end

  protected

  def secure_token
    var = :"@#{mounted_as}_secure_token"
    model.instance_variable_get(var) || model.instance_variable_set(var, SecureRandom.uuid)
  end
end
