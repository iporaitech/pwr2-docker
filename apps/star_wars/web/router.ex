defmodule StarWars.Router do
  use StarWars.Web, :router

  # Pipelines
  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end
  # pipeline :browser_auth do
  #  plug Guardian.Plug.VerifySession
  #  plug Guardian.Plug.LoadResource
  # end
  pipeline :graphql do
    plug :accepts, ["json"]
    # plug Guardian.Plug.VerifyHeader, realm: "Bearer"
    # plug Guardian.Plug.LoadResource
    # plug Core.Plug.GraphQLContext, repo: StarWars.Repo
  end

  # Routes
  # NOTE: every data related request is done through GraphQL, including login/logout.
  scope "/graphql" do
    pipe_through [:graphql]

    post "/graphiql", Absinthe.Plug.GraphiQL, schema: StarWars.GraphQL.Schema
    forward "/", Absinthe.Plug, schema: StarWars.GraphQL.Schema
  end

  scope "/", StarWars do
    # pipe_through [:browser, :browser_auth]
    pipe_through [:browser]

    get "/", PageController, :index
    get "/graphiql", PageController, :graphiql
    get "/star-wars", PageController, :star_wars
  end


end
