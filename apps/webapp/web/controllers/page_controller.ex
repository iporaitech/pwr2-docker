defmodule Webapp.PageController do
  use Webapp.Web, :controller

  def index(conn, %{"app_name" => app_name }) do
    render conn, "index.html", app_name: app_name
  end
  def index(conn, _params) do
    render conn, "index.html", app_name: "core"
  end
end
