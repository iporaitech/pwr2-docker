defmodule Core.GraphQL.Types.Viewer do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation
  alias Absinthe.Relay.Connection
  alias Core.{GraphQL.Schema, User, Repo}
  import Ecto.Query, only: [from: 2]
  import Canada, only: [can?: 2]
  import Absinthe.Relay.Node, only: [from_global_id: 2]

  node object :user do
    field :first_name, :string
    field :last_name, :string
    field :email, :string
    field :phone, :string
    field :role, :string
    field :password, :string
    field :password_confirmation, :string
  end

  @desc """
  User connection.
  """
  connection node_type: :user

  object :viewer do
    field :profile, :user

    @desc "El Jurista users"
    connection field :users, node_type: :user do

      resolve fn
        query_params, %{source: viewer} ->
          order = (Map.get(query_params, :order) == "asc") && :asc || :desc
          pagination_args =
            Map.delete(query_params, :search)
            |> Map.delete(:order)

          query =
            from m in User,
              order_by: [{^order, m.inserted_at}]

          conn =
            query
            |> Connection.from_query(&Repo.all/1, pagination_args)

          {:ok, conn}
      end

    end
  end

  object :viewer_field do
    field :viewer, :viewer do
      resolve fn
        _, %{context: %{current_user: current_user}} ->
          {:ok, %{profile: current_user}}
      end
    end
  end
end
