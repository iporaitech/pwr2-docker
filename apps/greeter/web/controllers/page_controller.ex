defmodule Greeter.PageController do
  use Webapp.Web, :controller

  def index(conn, _params) do
    text conn, "Hello!"
  end
end
