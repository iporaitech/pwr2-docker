defmodule Greeter.PageController do
  use Greeter.Web, :controller

  def index(conn, _params) do
    text conn, "Hello!"
  end
end
