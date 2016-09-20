defmodule Greeter.Router do
  use Greeter.Web, :router

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

  scope "/", Greeter do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  # TODO: Test conflictive routes
  # forward "/starwars", Greeter.PageController, :index
  # forward "/star-wars", PageController, :index
  # forward "/starwars/star-wars", PageController, :index


  # Other scopes may use custom stacks.
  # scope "/api", Greeter do
  #   pipe_through :api
  # end
end
