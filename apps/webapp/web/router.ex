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

  forward "/graphql", Absinthe.Plug.GraphiQL,
    schema: Webapp.Web.GraphQL.Schema

  scope "/", Webapp do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/graphiql", PageController, :graphiql
    get "/star-wars", PageController, :star_wars
    get "/user-widget", PageController, :user_widget
  end

  # Other scopes may use custom stacks.
  # scope "/api", Webapp do
  #   pipe_through :api
  # end
end
