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
  pipeline :graphql do
    plug :accepts, ["json"]
    plug Guardian.Plug.VerifyHeader, realm: "Bearer"
    plug Guardian.Plug.LoadResource, serializer: Core.GuardianSerializer
    plug Core.Plug.GraphQLCurrentUser, repo: Core.Repo
  end

  # Routes
  scope "/admin", Webapp, as: :admin do
    pipe_through [:browser]

    Enum.each ["/", "/graphiql", "users"], fn path ->
      get path, PageController, :index
    end
  end

  scope "/docs", Webapp do
    pipe_through [:browser]

    get "/", PageController, :docs
    get "/index", DocController, :index
    get "/:filename", DocController, :show
  end

  scope "/", Webapp do
    pipe_through [:browser]

    get "/", PageController, :index
    get "/login", PageController, :index

    # From here on we go to "apps" not specified before
    # TODO: create plug to handle app_name NOT FOUND
    get "/:app_name", PageController, :index
    get "/:app_name/graphiql", PageController, :index
  end

  scope "/graphql" do
    pipe_through [:graphql]

    forward "/graphiql", Core.Plug.GraphiQLWrapper, schema: Core.GraphQL.Schema
    forward "/", Core.Plug.GraphQLWrapper, schema: Core.GraphQL.Schema
  end

  # TODO: find out how to dinamically init Absinthe.Plug
  scope "/star_wars/graphql" do
    pipe_through [:graphql]

    forward "/graphiql", StarWars.Plug.GraphiQLWrapper, schema: StarWars.GraphQL.Schema
    forward "/", StarWars.Plug.GraphQLWrapper, schema: StarWars.GraphQL.Schema
  end
end
