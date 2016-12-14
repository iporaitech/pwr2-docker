defmodule Web.GraphQL.Resolver do
  @moduledoc """
  Functions to resolve GraphQL schema fields.
  """

  import Canada, only: [can?: 2]
  alias Core.Repo
  alias Core.User

  @unauthorized_error {:error, "Unauthorized"}
  @unauthenticated_error {:error, "User not signed in"}

  def unauthenticated_error, do: @unauthenticated_error
  def unauthorized_error, do: @unauthorized_error

  @doc """
  This resolve must be before others to match it first in case of nil user
  """
  def resolve(_, _, nil) do
    @unauthenticated_error
  end

  def resolve(:user, id, current_user) do
    with user <- Repo.get(User, id),
      true <- current_user |> can?(read user) do
      {:ok, user}
    else
      false -> @unauthorized_error
    end
  end



end
