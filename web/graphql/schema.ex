defmodule Webapp.Web.GraphQL.Schema do
  use Absinthe.Schema
  use Absinthe.Relay.Schema
  alias Webapp.Web.GraphQL.UserResolver
  alias Webapp.Web.GraphQL.StarWarsDB

  import_types Webapp.Web.GraphQL.Types

  @desc """
  This is the type that will be the root of our query,
  and the entry point into our schema.

  This implements the following type system shorthand:
    type Query {
      factions(names: [FactionName]): [Faction]
      node(id: ID!): Node
      empire: Faction
      rebels: Faction
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

    mutation do
      payload field :introduce_ship do
        input do
          field :faction_id, non_null(:id)
          field :ship_name, non_null(:string)
        end
        output do
          field :faction, :faction
          field :ship, :ship
        end
        resolve fn
          %{faction_id: faction_id, ship_name: ship_name}, _ ->
            StarWarsDB.create_ship(ship_name, faction_id)
        end
      end
    end
  end
end
