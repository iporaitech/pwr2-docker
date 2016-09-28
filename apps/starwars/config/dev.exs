use Mix.Config

# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we use it
# with brunch.io to recompile .js and .css sources.
# config :webapp, Webapp.Endpoint,
#   watchers: [
#     npm: [
#       "start",
#       cd: Path.expand("../", __DIR__)
#     ]
#   ]
#
# # Watch static and templates for browser reloading.
# config :starwars, Webapp.Endpoint,
#   live_reload: [
#     patterns: [
#       ~r{priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$},
#       ~r{priv/gettext/.*(po)$},
#       ~r{web/views/.*(ex)$},
#       ~r{web/templates/.*(eex)$}
#     ]
#   ]
#
# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Set a higher stacktrace during development. Avoid configuring such
# in production as building large stacktraces may be expensive.
config :phoenix, :stacktrace_depth, 20

# Configure your database
config :starwars, Starwars.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "starwars_dev",
  hostname: "db",
  pool_size: 10
