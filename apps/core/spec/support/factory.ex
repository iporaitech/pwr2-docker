defmodule Core.Factory do
  use ExMachina.Ecto, repo: Core.Repo

  def user_factory do
    %Core.User{
      first_name: "Jane",
      last_name: "Smith",
      email: sequence(:email, &"email#{&1}@example.com")
    }
  end

  def make_admin(user) do
    %{user | role: "admin"}
  end

  def make_superadmin(user) do
    %{user | role: "superadmin"}
  end
end
