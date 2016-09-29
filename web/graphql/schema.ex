defmodule Webapp.GraphQL.Schema do
  use Absinthe.Schema
  use Absinthe.Relay.Schema
  alias Webapp.GraphQL.Resolver

  import_types Webapp.GraphQL.Types.AuthMutations
  import_types Webapp.GraphQL.Types.Viewer

  # StarWars exaple types and mutations
<<<<<<< HEAD:web/graphql/schema.ex
<<<<<<< HEAD:web/graphql/schema.ex
  import_types Webapp.GraphQL.StarWars.Types
  import_types Webapp.GraphQL.StarWars.Mutations
=======
  import_types Starwars.GraphQL.Types
  import_types Starwars.GraphQL.Mutations
>>>>>>> 2e248ec... Remove starwars dir. Refs #14:apps/webapp/web/graphql/schema.ex
=======
  import_types StarWars.GraphQL.Types
  import_types StarWars.GraphQL.Mutations
>>>>>>> b08d3ba... Rename Starwars app to StarWars:apps/webapp/web/graphql/schema.ex

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
      %Webapp.User{}, _->
        :user
      %{type: :star_wars_ship}, _ ->
        :ship
      %{ships: _}, _ ->
        :faction
    end
  end

end
