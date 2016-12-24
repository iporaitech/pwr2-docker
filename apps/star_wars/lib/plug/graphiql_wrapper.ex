defmodule StarWars.Plug.GraphiQLWrapper do
  @moduledoc """
  We need to define this module to be able to use Absinthe.Plug multiple times
  in Webapp.Router and avoid the error:

  `Absinthe.Plug` has already been forwarded to. A module can only be
  forwarded a single time.
  """

  defdelegate init(opts), to: Absinthe.Plug.GraphiQL
  defdelegate call(conn, opts), to: Absinthe.Plug.GraphiQL
end
