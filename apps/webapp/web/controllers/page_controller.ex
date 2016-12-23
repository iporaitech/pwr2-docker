defmodule Webapp.PageController do
  use Webapp.Web, :controller

  def index(conn, %{"app_name" => app_name }) do
    render conn, "index.html", app_js: js_filename(app_name)
  end

  def index(conn, _params) do
    render conn, "index.html", app_js: js_filename
  end

  defp js_filename(), do: "core.js"
  defp js_filename(app_name), do: "#{app_name}.js"

end
