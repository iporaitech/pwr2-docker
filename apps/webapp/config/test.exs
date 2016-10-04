use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :webapp, Webapp.Endpoint,
  http: [port: {:system, "HTTP_PORT"}],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :webapp, Webapp.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: System.get_env("DB_USER"),
  password: System.get_env("DB_USER_PASSWORD"),
  database: "webapp_test",
  hostname: System.get_env("DB_HOST"),
  port: 5432,
  pool: Ecto.Adapters.SQL.Sandbox
