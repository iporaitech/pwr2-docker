defmodule Greeter.PageController do
  use Greeter.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
