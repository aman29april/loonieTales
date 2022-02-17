class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  add_flash_types :error, :success

  def health_check
    render layout: false, text: 'ok', status: :ok
  end
  #
  # def layout
  #   render text: nil, layout: false
  # end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    devise_parameter_sanitizer.permit(:sign_in, keys: [:username])
  end

  def current_user?(user)
    current_user.id == user.id
  end

  def meta_info_from_locals(prefix:)
    {
      title: I18n.t("#{prefix}.title"),
      description: I18n.t("#{prefix}.description"),
      keywords: I18n.t("#{prefix}.keywords")
    }
  end

  helper_method :current_user?
end
