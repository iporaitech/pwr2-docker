defmodule Webapp.GraphQL.Types.AuthMutations do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation
  import Comeonin.Bcrypt, only: [checkpw: 2, dummy_checkpw: 0]

  #TODO: Create resolve functions for these mutations in their own module and test them.
  # It will be easier to test the resolvers in isolation than embedded in the muations.

  object :auth_mutations do
    payload field :login do
      input do
        field :email, non_null(:string)
        field :password, non_null(:string)
      end
      output do
        field :access_token, :string
      end
      resolve fn
        %{email: email, password: password}, _ ->
          case authenticate_user(email, password) do
            {:ok, user} ->
              case Guardian.encode_and_sign(user) do
                {:ok, jwt, _full_claims} ->
                  {:ok, %{access_token: jwt}}
                {:error, reason} ->
                  {:error, reason}
              end
            {:error, reason} ->
              {:error, reason}
          end
      end
    end

    payload field :logout do
      output do
        field :logged_out, :boolean
      end
      resolve fn
        _, %{context: %{jwt: jwt}} ->
          case Guardian.revoke!(jwt) do
            :ok ->
              {:ok, %{logged_out: true}}
            {:error, reason} ->
              {:error, reason, logged_out: false}
          end
        _, _->
          {:error, %{
            reason: "Missing access token",
            logged_out: false
          }}
      end
    end
  end

  # TODO: move this to User model (or resolver?)
  defp authenticate_user(email, password) do
    user = Webapp.Repo.get_by(Webapp.User, email: email)
    cond do
      user && checkpw(password, user.password_hash) ->
        {:ok, user}
      user ->
        {:error, :unauthorized}
      true ->
        dummy_checkpw()
        {:error, :not_found}
    end
  end

end
