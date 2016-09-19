defmodule Starwars.Web.GraphQL.Schema do
  use Absinthe.Schema
  use Absinthe.Relay.Schema
  alias Starwars.Web.GraphQL.UserResolver
  alias Starwars.Web.GraphQL.StarWarsDB
  alias Absinthe.Relay.Connection

  import_types Starwars.Web.GraphQL.Types

  @desc """
  This is the type that will be the root of our query,
  and the entry point into our schema.

  This implements the following type system shorthand:
    type Query {
      factions(names: [FactionName]): [Faction]
      node(id: ID!): Node
      user(id: ID!): User
      users: [User]
    }

    NOTICE that user and users don't implement Node interface
  """
  query do

    field :factions, list_of(:faction) do
      arg :names, list_of(:string)
      resolve fn args, _ ->
        {:ok, StarWarsDB.get_factions(args[:names])}
      end
    end

    @desc "This is the field used by Relay to identify an object in the Graph"
    node field do
      resolve fn
        %{type: node_type, id: id}, _ ->
          StarWarsDB.get(node_type, id)
        _, _ ->
          {:ok, nil}
      end
    end

    @desc "Get all system users (fake tmp implementation)"
    field :users, list_of(:user) do
      resolve &UserResolver.all/2
    end

    @desc "Get user by id (fake tmp implementation)"
    field :user, type: :user do
      arg :id, non_null(:id)
      resolve &UserResolver.find/2
    end

    @desc """
    Creates the IntroduceShip mutation.

    In the mutator configuration in getConfigs() in AddShipMutation.js, edgeName;
    which is required for RANGE_ADD mutation types, is set to newShipEdge, that's why
    new_ship_edge is in the output block.
    """
    mutation do
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
end
