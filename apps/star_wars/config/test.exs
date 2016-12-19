use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :core, StarWars.Endpoint,
  http: [port: {:system, "HTTP_PORT"}],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# TODO: Add DB config HERE
