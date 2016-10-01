defmodule Webapp.GraphQL.Resolver do
  @moduledoc """
  Functions to resolve GraphQL schema fields.
  """

  import Canada, only: [can?: 2]
  alias Webapp.Repo
  alias Webapp.User

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

  # TODO: Don't forget to remove this StarWars stuff after extracting for pwr2-docker
  alias Webapp.GraphQL.StarWarsDB
  def resolve(:ship, id, current_user) do
    with {:ok, ship} <- StarWarsDB.get(:ship, id),
      true <- current_user |> can?(read ship) do
      {:ok, ship}
    else
      {:error, _no_ship_msg} -> {:ok, nil}
      false -> @unauthorized_error
    end
  end
  def resolve(:faction, id, current_user) do
    with {:ok, faction} <- StarWarsDB.get(:faction, id),
      true <- current_user |> can?(read faction) do
      {:ok, faction}
    else
      {:error, _no_faction_msg} -> {:ok, nil}
      false -> @unauthorized_error
    end
  end

end
