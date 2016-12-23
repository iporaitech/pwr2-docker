defmodule Webapp.Mixfile do
  use Mix.Project

  def project do
    [app: :webapp,
     version: "0.3.4",
     elixir: "~> 1.3",
     elixirc_paths: elixirc_paths(Mix.env),
     compilers: [:phoenix, :gettext] ++ Mix.compilers,
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     build_path: "../../_build",
     config_path: "../../config/config.exs",
     deps_path: "../../deps",
     lockfile: "../../mix.lock",
     aliases: aliases(),
     deps: deps()]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      mod: {Webapp, []},
      applications: applications(Mix.env)
    ]
  end

  def applications(_) do
    [
      :phoenix,
      :phoenix_html,
      :cowboy,
      :logger,
      :gettext
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "web", "test/support"]
  defp elixirc_paths(_),     do: ["lib", "web"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [{:phoenix, "~> 1.2.0"},
     {:phoenix_pubsub, "~> 1.0"},
     {:phoenix_html, "~> 2.8"},
     {:phoenix_live_reload, "~> 1.0", only: :dev},
     {:gettext, "~> 0.13"},
     {:cowboy, "~> 1.0"},
     {:comeonin, "~> 2.4"},
     {:guardian, "~> 0.13.0"},
     {:absinthe_plug, "~> 1.2"},
     {:star_wars, in_umbrella: true},

     #test packages
     {:mix_test_watch, "~> 0.2", only: :test},
     {:wallaby, "~> 0.14.0", only: [:dev, :test]}
    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    []
  end

end
