defmodule Webapp.GraphQL.StarWars.Mutations do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation
  alias Absinthe.Relay.Connection
  alias Webapp.GraphQL.StarWarsDB

  object :star_wars_mutations do
    @desc """
    Creates the IntroduceShip mutation.

    In the mutator configuration in getConfigs() in AddShipMutation.js, edgeName;
    which is required for RANGE_ADD mutation types, is set to newShipEdge, that's why
    new_ship_edge is in the output block.
    """
    payload field :introduce_ship do
      input do
        field :faction_id, non_null(:id)
        field :ship_name, non_null(:string)
      end
      output do
        field :faction, :faction
        field :new_ship_edge, :ship_edge
      end
      resolve fn
        # TODO: Add and use context for Auth
        %{faction_id: faction_id, ship_name: ship_name}, _ ->
          # just fail if not :ok
          {:ok, ship} = StarWarsDB.create_ship(ship_name, faction_id)
          faction = StarWarsDB.get_faction(faction_id)

          # In the original examples a cursorFromObjectInConnection() imported
          # from graphql-relay is used to get the cursor. I didn't find
          # an implementation for such function in Absinthe.Relay
          #
          # NOTICE Connection.from_list implementation requires you to pass pagination args.
          #        I think this should be fixed by implicitly asking for all the edges in the
          #        connection
          cursor = (Connection.from_list(faction.ships, %{last: length(faction.ships)}).edges
            |> Enum.find(fn e -> e.node == ship.id end)).cursor

          # resolve fn must return {:ok, data} tuple
          {:ok, %{
            faction: faction,
            new_ship_edge: %{
              node: ship,
              cursor: cursor
            }
          }}
      end
    end
  end
end
