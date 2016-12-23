defmodule Webapp.LayoutView do
  use Webapp.Web, :view

  def server_js_vars(app_name) do
    cond do
      Enum.member?([:dev, :test], Mix.env) ->
        base_url = "http://localhost:#{System.get_env("HTTP_PORT")}"
        graphql = app_name != "core" && "/#{app_name}/graphql" || "/graphql"
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
