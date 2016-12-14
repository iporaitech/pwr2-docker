defmodule Core.Admin.PageController do
  use Core.Web, :controller

  def index(conn, _params) do
    render_view(conn)
  end

  def graphiql(conn, _params) do
    render_view(conn)
  end

  def star_wars(conn, _params) do
    render_view(conn)
  end

  defp render_view(conn) do
    render conn, Core.PageView, "index.html"
  end
end
