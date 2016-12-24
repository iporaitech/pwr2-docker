use Mix.Config
require System

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# DB config
config :core, Core.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: System.get_env("DB_USER"),
  password: System.get_env("DB_USER_PASSWORD"),
  database: System.get_env("DB_NAME"),
  hostname: System.get_env("DB_HOST"),
  port: 5432,
  pool_size: 10
