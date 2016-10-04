defmodule Webapp.Admin.PageController do
  use Webapp.Web, :controller

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
    render conn, Webapp.PageView, "index.html"
  end
end
