defmodule Starwars.Router do
  use Starwars.Web, :router

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

  forward "/graphql", Absinthe.Plug.GraphiQL,
    schema: Starwars.Web.GraphQL.Schema

  scope "/", Starwars do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/graphiql", PageController, :graphiql
    get "/star-wars", PageController, :starwars
    get "/user-widget", PageController, :user_widget
  end

  # Other scopes may use custom stacks.
  # scope "/api", Starwars do
  #   pipe_through :api
  # end
end
