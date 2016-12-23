defmodule Webapp.Router do
  use Webapp.Web, :router

  # Pipelines
  pipeline :browser do
    plug :accepts, ["html", "json"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end
  pipeline :browser_auth do
   plug Guardian.Plug.VerifySession
   plug Guardian.Plug.LoadResource
  end
  pipeline :graphql do
    plug :accepts, ["json"]
    plug Guardian.Plug.VerifyHeader, realm: "Bearer"
    plug Guardian.Plug.LoadResource
    # plug Webapp.Plug.GraphQLContext, repo: Webapp.Repo
  end

  # Routes
  # NOTE: every data related request is done through GraphQL, including login/logout.
  # scope "/graphql" do
  #   pipe_through [:graphql]
  #
  #   # post "/graphiql", Absinthe.Plug.GraphiQL, schema: Webapp.GraphQL.Schema
  #   # forward "/", Absinthe.Plug, schema: Webapp.GraphQL.Schema
  # end

  scope "/admin", Webapp.Admin, as: :admin do
    pipe_through [:browser, :browser_auth]

    get "/", PageController, :index
    get "/graphiql", PageController, :graphiql
  end

  scope "/docs", Webapp do
    get "/", PageController, :docs
    get "/index", DocController, :index
    get "/:filename", DocController, :show
  end

  scope "/", Webapp do
    pipe_through [:browser, :browser_auth]

    get "/", PageController, :index
    get "/login", PageController, :index

    # from here on we get "apps" not specified before
    # TODO: create plug to handle app_name NOT FOUND
    get "/:app_name", PageController, :index
  end

end
