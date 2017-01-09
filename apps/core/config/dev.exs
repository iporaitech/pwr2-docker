use Mix.Config

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# DB config
config :core, Core.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: System.get_env("PWR2_CORE_DB_USER"),
  password: System.get_env("PWR2_CORE_DB_PASSWORD"),
  database: System.get_env("PWR2_CORE_DB"),
  hostname: System.get_env("PWR2_CORE_DB_HOST"),
  port: System.get_env("PWR2_CORE_DB_PORT"),
  pool_size: 10
