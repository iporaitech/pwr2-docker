defmodule Pwr2.Mixfile do
  use Mix.Project

  def project do
    [apps_path: "apps",
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     deps: deps()]
  end

  defp deps do
    [
      {:absinthe_relay, "~> 0.9.4"},
      {:absinthe_plug, "~> 1.1.3"}
    ]
  end
end
