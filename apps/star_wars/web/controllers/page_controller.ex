defmodule StarWars.PageController do
  use StarWars.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def login(conn, _params) do
    render conn, "index.html"
  end

  def docs(conn, _params) do
    render conn, "index.html"
  end
end
