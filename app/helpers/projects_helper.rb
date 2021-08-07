module ProjectsHelper
  def edit_project_link(project)
    link_to 'Edit', edit_user_project_path(project.user, project), class: 'dropdown-item'
  end

  def destroy_project_link(project)
    link_to 'Delete', user_project_path(@user, project), method: :delete, data: { confirm: 'Are you sure?' },
                                                         class: 'dropdown-item'
  end
end
