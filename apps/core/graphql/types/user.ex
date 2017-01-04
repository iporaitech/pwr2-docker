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
    Adds a User to DB if success
    """
    payload field :add_user do
      input do
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

          create = fn args ->
            %User{}
              |> User.registration_changeset(args)
              |> Repo.insert
          end

          with true <- authorized,
            {:ok, %User{} = user} <- create.(args)
          do
            {:ok, %{user: user}}
          else
            false ->
              Core.GraphQL.Resolver.unauthorized_error
            {:error, %{errors: errors}} ->
              { :ok, %{
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

    payload field :edit_user do
      input do
        field :id, non_null(:id)
        field :first_name, non_null(:string)
        field :last_name, non_null(:string)
        field :phone, :string
        field :email, non_null(:string)
        field :role, non_null(:string)
      end
      output do
        field :user, :user
        field :errors, list_of(:string)
      end
      resolve fn
        args, %{context: %{current_user: current_user}} ->
          authorized = current_user |> can?(write User)

          {:ok, data} = Absinthe.Relay.Node.from_global_id(args.id, Core.GraphQL.Schema)

          edit = fn args ->
            Repo.get!(User, data.id)
              |> User.update_changeset(args)
              |> Repo.update
          end

          with true <- authorized,
            {:ok, %User{} = user} <- edit.(args)
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
