# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :core,
  ecto_repos: [Core.Repo]

# Configures the endpoint
config :core, Core.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "ZBOeN5ogBV5cq2p+ttL4pJbU/7EIVMbkyxBYPebuhf6MzNYjO4HOtp9g2uDdQU9v",
  render_errors: [view: Core.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Core.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

#guardian config
config :guardian, Guardian,
  hooks: GuardianDb,
  allowed_algos: ["HS512"], # optional
  verify_module: Guardian.JWT,  # optional
  issuer: "Core",
  ttl: { 30, :days },
  verify_issuer: true, # optional
  secret_key: "JYUIKDM2CQE87DAWG3CY4RNWL8",
  # TODO: vv
  # secret_key: fn ->
  #   System.get_env("SECRET_KEY_PASSPHRASE") |> JOSE.JWK.from_file(System.get_env("SECRET_KEY_FILE"))
  # end
  serializer: Core.GuardianSerializer

config :guardian_db, GuardianDb,
  repo: Core.Repo,
  sweep_interval: 120 # minutes

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
