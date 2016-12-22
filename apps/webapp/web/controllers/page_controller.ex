defmodule Webapp.PageController do
  use Webapp.Web, :controller

  def index(conn, %{"app_name": app_name }) do
    render conn, "index.html"
  end

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
