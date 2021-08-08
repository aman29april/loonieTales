# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  prepend_before_action :validate_captcha, only: [:create]

  private

  def validate_captcha
    verify_recaptcha(action: 'registration', minimum_score: 0.5, model: resource)
  end
end
