# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Webapp.Repo.insert!(%Webapp.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias Webapp.Repo
alias Webapp.User

%User{}
|> User.registration_changeset(%{
  first_name: "John",
  last_name: "Rambo",
  email: "jrambo@test.com",
  password: "12341234"})
|> Repo.insert!
