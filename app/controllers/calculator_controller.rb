class CalculatorController < ApplicationController
  def crs
    set_meta_tags meta_info_from_locals(prefix: 'calculators.crs')
  end

  def tax
    set_meta_tags meta_info_from_locals(prefix: 'calculators.tax')
  end

  def ieltsToClb
    set_meta_tags meta_info_from_locals(prefix: 'calculators.ieltsToClb')
  end
end
