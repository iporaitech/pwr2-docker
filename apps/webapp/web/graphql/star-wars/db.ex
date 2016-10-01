defmodule Webapp.GraphQL.StarWarsDB do
  @moduledoc """
  StarWarsDB is a "in memory" database implemented with Elixir.Agent to support the [Relay Star Wars example](https://github.com/relayjs/relay-examples/blob/master/star-wars)

  NOTICE: in the original example the format of the data is id => name where name is a string.
  """

  @initial_state %{
    ship: %{
      "1" => %{id: "1", name: "X-Wing", type: :star_wars_ship},
      "2" => %{id: "2", name: "Y-Wing", type: :star_wars_ship},
      "3" => %{id: "3", name: "A-Wing", type: :star_wars_ship},
      "4" => %{id: "4", name: "Millenium Falcon", type: :star_wars_ship},
      "5" => %{id: "5", name: "Home One", type: :star_wars_ship},
      "6" => %{id: "6", name: "TIE Fighter", type: :star_wars_ship},
      "7" => %{id: "7", name: "TIE Interceptor", type: :star_wars_ship},
      "8" => %{id: "8", name: "Executor", type: :star_wars_ship}
    },
    faction: %{
      "1" => %{
        id: "1",
        name: "Alliance to Restore the Republic",
        ships: ["1", "2", "3", "4", "5"]
      },
      "2" => %{
        id: "2",
        name: "Galactic Empire",
        ships: ["6", "7", "8"]
      }
    }
  }

  @doc """
  Initialize a DB process (Agent)
  """
  def start_link do
    Agent.start_link(fn -> @initial_state end, name: __MODULE__)
  end

  def stop do
    Agent.stop(__MODULE__)
  end

  def get(type, id) do
    case Agent.get(__MODULE__, &get_in(&1, [type, id])) do
      nil ->
        {:error, "No #{type} with ID #{id}"}
      result ->
        {:ok, result}
    end
  end

  @doc """
  Create a new Ship and assign it to Faction identified by faction_id

  NOTICE: this function is not "concurrent" safe because there is no "lock" on "next_ship_id"
  and also is doesn't take care of referential integrity.
  """
  def create_ship(ship_name, faction_id) do
    next_ship_id = Agent.get(__MODULE__, fn data ->
      Map.keys(data[:ship])
      |> Enum.map(fn id -> String.to_integer(id) end)
      |> Enum.sort
      |> List.last
      |> Kernel.+(1) # there's a deprecation msg when trying to pipe to +
      |> Integer.to_string
    end)

    ship_data = %{id: next_ship_id, name: ship_name, type: :star_wars_ship}
    case Agent.update(__MODULE__, &put_in(&1, [:ship, next_ship_id], ship_data)) do
      nil ->
        {:error, "Could not create ship"}
      :ok ->
        faction_ships = Agent.get(__MODULE__, &Map.get(&1, :faction))[faction_id][:ships]
        faction_ships = faction_ships ++ [next_ship_id]
        Agent.update(__MODULE__, &put_in(&1, [:faction, faction_id, :ships], faction_ships))
        {:ok, ship_data}
    end
  end

  def dump_db do
    Agent.get(__MODULE__, fn state -> state end)
  end

  def get_factions(names) do
    factions = Agent.get(__MODULE__, &Map.get(&1, :faction)) |> Map.values
    Enum.map(names, fn name ->
      factions
      |> Enum.find(&(&1.name == name))
    end)
  end

  def get_faction(id) do
    Agent.get(__MODULE__, &get_in(&1, [:faction, id]))
  end

end
