module DateUtil
  SECONDS_PER_HOUR = 3600

  class << self
    def hours_between(clock_in_time, clock_out_time)
      (clock_out_time.in_time_zone - clock_in_time.in_time_zone) / SECONDS_PER_HOUR
    end

    def minutes_between(clock_out_time, clock_in_time)
      (clock_out_time.in_time_zone - clock_in_time.in_time_zone) / 60
    end

    def formatted_date(datetime)
      datetime.strftime('%B, %Y')
    end

    def date_range(start_date, end_date, has_end = false)
      start = formatted_date(start_date)
      ending = has_end ? 'Present' : DateUtil.formatted_date(end_date)
      "#{start} - #{ending}"
    end
  end
end
