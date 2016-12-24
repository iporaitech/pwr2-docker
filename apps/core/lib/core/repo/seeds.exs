# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Core.Repo.insert!(%Core.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias Core.Repo
alias Core.User

%User{}
|> User.registration_changeset(%{
  role: "superadmin",
  first_name: "John",
  last_name: "Rambo",
  email: "jrambo@test.com",
  password: "12341234"})
|> Repo.insert!
