module ExperiencesHelper
  def experience_range(experience)
    DateUtil.date_range(experience.start_date, experience.end_date, experience.working_here)
  end
end
