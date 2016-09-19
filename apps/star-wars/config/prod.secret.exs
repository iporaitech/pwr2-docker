use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.
#
# You should document the content of this
# file or create a script for recreating it, since it's
# kept out of version control and might be hard to recover
# or recreate for your teammates (or you later on).
config :starwars, Starwars.Endpoint,
  secret_key_base: "XMqzZQHFhTDDvG/LEErDWttNS+ymnNJ+4TvqF/9LarCCJ5DcVa/9azSupRRWhDgY"

# Configure your database
config :starwars, Starwars.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "starwars_prod",
  pool_size: 20
