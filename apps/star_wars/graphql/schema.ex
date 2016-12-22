defmodule StarWars.GraphQL.Schema do
  use Absinthe.Schema
  use Absinthe.Relay.Schema
  alias StarWars.GraphQL.DB, as: StarWarsDB

  # StarWars exaple types and mutations
  import_types StarWars.GraphQL.Types
  import_types StarWars.GraphQL.Mutations

  query do
    import_fields :star_wars_root_field

    @desc "This is the field used by Relay to identify an object in the Graph"
    node field do
      resolve fn
        %{type: type, id: id}, _ ->
          resolve(type, id) # resolve/2 defined below
        _, _ ->
          {:ok, nil}
      end
    end
  end # END query

  mutation do
    import_fields :star_wars_mutations
  end # END mutation

  @desc """
  Node interface provided by Absinthe.Relay.
  """
  node interface do
    resolve_type fn
      %{type: :star_wars_ship}, _ ->
        :ship
      %{ships: _}, _ ->
        :faction
    end
  end

  #
  # Resolvers
  #
  defp resolve(:ship, id) do
    with {:ok, ship} <- StarWarsDB.get(:ship, id) do
      {:ok, ship}
    else
      {:error, _no_ship_msg} -> {:ok, nil}
    end
  end

  defp resolve(:faction, id) do
    with {:ok, faction} <- StarWarsDB.get(:faction, id) do
      {:ok, faction}
    else
      {:error, _no_faction_msg} -> {:ok, nil}
    end
  end

end
