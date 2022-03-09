class CalculatorController < ApplicationController
  def index
    set_meta_tags meta_info_from_locals(prefix: 'calculators.crs')
  end

  def crs
    set_meta_tags meta_info_from_locals(prefix: 'calculators.crs')
  end

  def fsw67Point
    set_meta_tags meta_info_from_locals(prefix: 'calculators.67Points')
  end

  def sinp
    set_meta_tags meta_info_from_locals(prefix: 'calculators.sinp')
  end

  def tax
    set_meta_tags meta_info_from_locals(prefix: 'calculators.tax')
  end

  def ieltsToClb
    set_meta_tags meta_info_from_locals(prefix: 'calculators.ieltsToClb')
  end
end
