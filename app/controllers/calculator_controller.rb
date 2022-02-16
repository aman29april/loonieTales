class CalculatorController < ApplicationController
  def crs
    set_meta_tags meta_info_from_locals(prefix: 'calculators.crs')
  end

end
