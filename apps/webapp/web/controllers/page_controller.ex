defmodule Webapp.PageController do
  use Webapp.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def graphiql(conn, _params) do
    render conn, "graphiql.html"
  end

  def star_wars(conn, _params) do
    render conn, "star_wars.html"
  end

  def user_widget(conn, _params) do
    render conn, "user_widget.html"
  end
end
