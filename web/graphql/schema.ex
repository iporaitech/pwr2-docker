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
    }
  """
  query do
    field :rebels, :faction do
      resolve fn
        _, _ ->
          StarWarsDB.get_rebels()
      end
    end

    field :empire, :faction do
      resolve fn
        _, _ ->
          StarWarsDB.get_empire()
      end
    end

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
  end
end
