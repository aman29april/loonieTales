module HomeHelper
  Tool = Struct.new(:title, :path)

  def calculators_list
    tools = []
    tools.push Tool.new(title = 'Find Your NOC', path = noc_codes_path)
    tools.push Tool.new(title = 'LMIA Companies', path = lmia_jobs_path)
    tools.push Tool.new(title = 'CRS Express Entry', path = crs_calculator_path)
    tools.push Tool.new(title = 'SINP Points Calculator', path = sinp_points_calculator_path)
    tools.push Tool.new(title = 'IELTS To CLB', path = ielts_to_clb_calculator_path)
    tools.push Tool.new(title = 'Canada Tax Calculator', path = tax_calculator_path)
    tools
  end
end
