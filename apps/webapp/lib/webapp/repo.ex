defmodule Webapp.Repo do
  # use Ecto.Repo, otp_app: :webapp
  @moduledock """
  Temporary in memory repository.
  """

  def all(Webapp.User) do
    [%Webapp.User{
        id: "1",
        username: "hisa",
        name: "Hisa Ishibashi",
        email: "hisa@iporaitech.com"
      }, %Webapp.User{
        id: "2",
        username: "tania",
        name: "Tania Paiva",
        email: "tania@iporaitech.com"
      }, %Webapp.User{
        id: "3",
        username: "edipo",
        name: "Edipo da Silva",
        email: "edipo@iporaitech.com"
      }]
  end
  def all(_module), do: []

  def get(module, id) do
    Enum.find all(module), fn map -> map.id == id end
  end

  def get_by(module, params) do
    Enum.find all(module), fn map ->
      Enum.all?(params, fn {key, val} -> Map.get(map, key) == val end)
    end
  end
end
