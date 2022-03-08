module NocsHelper
  def to4Chas(code)
    code.to_s.rjust(4, '0')
  end
end
