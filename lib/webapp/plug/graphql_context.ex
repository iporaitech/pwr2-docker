defmodule Webapp.Plug.GraphQLContext do
  @behaviour Plug
  import Plug.Conn

  def init(opts), do: opts

  def call(conn, _opts) do
    case build_context(conn) do
      {:ok, context} ->
        put_private(conn, :absinthe, %{context: context})
      nil ->
        send_resp(conn, 403, "Invalid access token")
      _ ->
        send_resp(conn, 400, nil)
    end
  end

  defp build_context(conn) do
    with user <- Guardian.Plug.current_resource(conn) do
      {:ok, %{current_user: user, jwt: Guardian.Plug.current_token(conn)}}
    end
  end
end
