# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :starwars,
  ecto_repos: [Starwars.Repo]

# Configures the endpoint
config :starwars, Starwars.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "ZBOeN5ogBV5cq2p+ttL4pJbU/7EIVMbkyxBYPebuhf6MzNYjO4HOtp9g2uDdQU9v",
  render_errors: [view: Starwars.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Starwars.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
