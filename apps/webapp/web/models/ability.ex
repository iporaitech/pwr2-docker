alias Webapp.User
alias Webapp.Company
alias Webapp.Person
#check is Webapp.Repo
defimpl Canada.Can, for: User do

  #
  # User abilities
  #
  def can?(%User{id: user_id}, action, %User{id: user_id})
    when action in [:update, :read, :show, :edit], do: true
  def can?(%User{}, action, Company)
    when action in [:read, :index, :show], do: true
  def can?(%User{}, action, Person)
    when action in [:read, :index, :show], do: true

  #
  # Admin abilities
  #
  def can?(%User{role: "admin"}, _, model)
    when model in [Company, Person], do: true

  #
  # Superadmin abilities (can do everything)
  #
  def can?(%User{role: "superadmin"}, _, _), do: true

  #
  # Undefined is always false
  #
  def can?(_, _, _), do: false
end
