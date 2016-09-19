defmodule Starwars.Web.GraphQL.UserResolver do
  def all(_args, _info) do
    {:ok, Starwars.Repo.all(Starwars.User)}
  end

  def find(%{id: id}, _info) do
    case Starwars.Repo.get(Starwars.User, id) do
     nil -> {:error, "User id #{id} not found"}
     user -> {:ok, user}
    end
  end
end
