defmodule Webapp.GraphQL.StarWars.Types do
  @moduledoc """
  This is an Elixir/Absinthe.Relay version of the GraphQL schema defined in:
  https://github.com/relayjs/relay-examples/blob/master/star-wars/data/schema.js

  and inspired on
  https://github.com/absinthe-graphql/absinthe_relay/tree/master/test/star_wars
  """
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation

  alias Absinthe.Relay.Connection
  alias Webapp.GraphQL.StarWarsDB
  alias Webapp.GraphQL.Resolver


  object :star_wars_root_field do
    @desc """
    StarWars field to be used in the RootQueryType.
    """
    field :factions, list_of(:faction) do
      arg :names, list_of(:string)
      resolve fn
        # TODO: check roles in this resolver fn
        args, %{context: %{current_user: nil}} ->
          Resolver.unauthenticated_error
        args, %{context: %{current_user: u}} ->
          {:ok, StarWarsDB.get_factions(args[:names])}
      end
    end
  end


  @desc """
  A ship in the Star Wars saga

  This implements the following type system shorthand:
    type Ship : Node {
      id: String!
      name: String
    }
  """
  node object :ship do
    field :name, non_null(:string), description: "The name of the ship"
  end

  @desc """
  A faction in the Star Wars saga

  This implements the following type system shorthand:
    type Faction : Node {
      id: String!
      name: String
      ships: ShipConnection
    }
  """
  node object :faction do
    @desc "id of faction in db"
    field :faction_id, :id do
      resolve fn
        _, %{source: faction} ->
          {:ok, faction.id}
      end
    end

    @desc "The name of the faction"
    field :name, :string

    @desc "The ships used by the faction."
    connection field :ships, node_type: :ship do
      resolve fn
        pagination_args, %{source: faction} ->
          conn = Connection.from_list(
            Enum.map(faction.ships, fn
              id ->
                with {:ok, value} <- StarWarsDB.get(:ship, id) do
                  value
                end
            end),
            pagination_args
          )
          {:ok, conn}
      end
    end
  end

  @desc """
  We define a connection between a faction and its ships.

  connectionType implements the following type system shorthand:
    type ShipConnection {
      edges: [ShipEdge]
      pageInfo: PageInfo!
    }

  connectionType has an edges field - a list of edgeTypes that implement the
  following type system shorthand:
    type ShipEdge {
      cursor: String!
      node: Ship
    }
  """
  connection node_type: :ship

end
