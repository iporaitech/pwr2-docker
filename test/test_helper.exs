ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Webapp.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Webapp.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Webapp.Repo)

