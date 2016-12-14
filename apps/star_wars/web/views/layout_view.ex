defmodule StarWars.LayoutView do
  use StarWars.Web, :view

  def server_js_vars do
    cond do
      Enum.member?([:dev, :test], Mix.env) ->
        graphql = "http://localhost:#{System.get_env("HTTP_PORT")}/graphql"
        graphiql = graphql <> "/graphiql"
        """

        var GRAPHQL_URL = '#{graphql}';
        var GRAPHIQL_URL = '#{graphiql}'
        """
      :prod ->
        """

        var GRAPHQL_URL = '#{System.get_env("GRAPHQL_URL")}';
        """
    end
    |> raw
  end
end
