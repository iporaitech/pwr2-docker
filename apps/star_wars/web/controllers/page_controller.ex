defmodule StarWars.PageController do
  use StarWars.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def graphiql(conn, _params) do
    render conn, "index.html"
  end

end
