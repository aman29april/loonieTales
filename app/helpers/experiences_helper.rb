module ExperiencesHelper
  def experience_range(experience)
    DateUtil.date_range(experience.start_date, experience.end_date, experience.working_here)
  end

  def edit_experience_link(experience)
    link_to 'Edit', edit_user_experience_path(experience.user, experience), class: 'dropdown-item'
  end

  def destroy_experience_link(experience)
    link_to 'Delete', user_experience_path(@user, experience), method: :delete, data: { confirm: 'Are you sure?' },
                                                               class: 'dropdown-item'
  end
end
