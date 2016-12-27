use Mix.Config

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :core, Core.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: System.get_env("DB_USER"),
  password: System.get_env("DB_USER_PASSWORD"),
  database: System.get_env("TEST_DB_NAME"),
  hostname: System.get_env("DB_HOST"),
  port: 5432,
  pool: Ecto.Adapters.SQL.Sandbox
