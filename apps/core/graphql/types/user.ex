defmodule Core.GraphQL.Types.User do

  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation
  alias Absinthe.Relay.Connection
  alias Core.{GraphQL.Schema, User, Repo}
  import Ecto.Query, only: [from: 2]
  import Canada, only: [can?: 2]

  #
  # Mutations
  #
  object :user_mutations do
    @desc """
    Add/Edit a User to DB if success
    """
    payload field :user do
      input do
        field :id, non_null(:id)
        field :first_name, non_null(:string)
        field :last_name, non_null(:string)
        field :phone, :string
        field :email, non_null(:string)
        field :role, non_null(:string)
        field :password, non_null(:string)
        field :password_confirmation, non_null(:string)
      end
      output do
        field :user, :user
        field :errors, list_of(:string)
      end
      resolve fn
        args, %{context: %{current_user: current_user}} ->

          authorized = current_user |> can?(write User)

          if Map.has_key?(args, :id) do
            {:ok, data} = Absinthe.Relay.Node.from_global_id(args.id, Core.GraphQL.Schema)

            insert_user = fn args ->
              Repo.get!(User, data.id)
                |> User.update_changeset(args)
                |> Repo.update
            end
          else
            insert_user = fn args ->
              %User{}
                |> User.registration_changeset(args)
                |> Repo.insert
            end
          end

          with true <- authorized,
            {:ok, %User{} = user} <- insert_user.(args)
          do
            {:ok, %{user: user}}
          else
            false ->
              Core.GraphQL.Resolver.unauthorized_error
            {:error, %{errors: errors}} ->
              {:ok, %{
                errors: Enum.map(errors, fn (err) ->
                  {field, {field_err_msg, _type_info}} = err
                  "#{field}: #{field_err_msg}"
                end)
              }}
            {:error, message} ->
              {:error, message}
          end
      end
    end
  end # END object :user_mutations

end
