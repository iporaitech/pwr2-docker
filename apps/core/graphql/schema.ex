defmodule Core.GraphQL.Schema do
  use Absinthe.Schema
  use Absinthe.Relay.Schema
  alias Core.GraphQL.Resolver

  import_types Core.GraphQL.Types.AuthMutations
  import_types Core.GraphQL.Types.Viewer

  # StarWars exaple types and mutations
  import_types StarWars.GraphQL.Types
  import_types StarWars.GraphQL.Mutations

  query do
    import_fields :viewer_field
    import_fields :star_wars_root_field

    @desc "This is the field used by Relay to identify an object in the Graph"
    node field do
      resolve fn
        %{type: type, id: id}, %{context: %{current_user: u}} ->
          Resolver.resolve(type, id, u)
        _, _ ->
          {:ok, nil}
      end
    end
  end # END query

  mutation do
    import_fields :auth_mutations
    import_fields :star_wars_mutations
  end # END mutation

  @desc """
  Node interface provided by Absinthe.Relay.
  """
  node interface do
    resolve_type fn
      %Core.User{}, _->
        :user
      %{type: :star_wars_ship}, _ ->
        :ship
      %{ships: _}, _ ->
        :faction
    end
  end

end
