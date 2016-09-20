require Starwars.Router
require Greeter.Router

defmodule Webapp.Router do
  use Webapp.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Webapp do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  # act as final catch
  scope "/starwars" do
    forward "/", Starwars.Router
  end

  scope "/greeter" do
    forward "/", Greeter.Router
  end

  # Other scopes may use custom stacks.
  # scope "/api", Webapp do
  #   pipe_through :api
  # end
end
