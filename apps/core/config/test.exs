use Mix.Config

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :core, Core.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: System.get_env("PWR2_CORE_DB_USER"),
  password: System.get_env("PWR2_CORE_DB_PASSWORD"),
  database: System.get_env("PWR2_CORE_TEST_DB"),
  hostname: System.get_env("PWR2_CORE_DB_HOST"),
  port: System.get_env("PWR2_CORE_DB_PORT"),
  pool: Ecto.Adapters.SQL.Sandbox
