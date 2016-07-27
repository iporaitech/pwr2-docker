defmodule Webapp.UserResolver do
  def all(_args, _info) do
    {:ok, Webapp.Repo.all(Webapp.User)}
  end

  def find(%{id: id}, _info) do
    case Webapp.Repo.get(Webapp.User, id) do
     nil -> {:error, "User id #{id} not found"}
     user -> {:ok, user}
    end
  end
end
