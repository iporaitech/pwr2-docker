defmodule Core.Factory do
  use ExMachina.Ecto, repo: Core.Repo

  @doc """
  User factory and its role and password helpers
  """
  def user_factory do
    %Core.User{
      first_name: "Joe",
      last_name: "Rambo",
      email: sequence(:email, &"joe_#{&1}@test.com")
    }
  end
  def make_admin(user) do
    %{user | role: "admin"}
  end
  def make_superadmin(user) do
    %{user | role: "superadmin"}
  end
  def set_password(user, password) do
    user
    |> Core.User.registration_changeset(%{password: password})
  end

end
