defmodule Webapp.Plug.GraphQLContextSpec do
  @endpoint Webapp.Endpoint
  use ESpec
  use Phoenix.ConnTest
  import Webapp.Factory
  
  let :user, do: insert(:user)

  describe "call/2" do
    context "when Guardian.Plug.LoadResource finds an user from the current_token in conn" do
      it "assigns %{context: %{current_user: user, jwt: current_token}} to :absinthe in conn" do
        {:ok, jwt, _full_claims} = Guardian.encode_and_sign(user)
        conn = build_conn
        |> put_req_header("authorization", "Bearer #{jwt}")

        expect(conn.private[:absinthe]).to be_nil
        conn = post(conn, "/graphql")
        expect(conn.private[:absinthe]).to eq(%{context: %{current_user: user, jwt: jwt}})
      end
    end

    context "when Guardian.Plug.LoadResource DOESN'T find an user" do
      it "assigns %{context: %{current_user: nil, jwt: nil}} to :absinthe in conn" do
        jwt = "whatever"
        conn = build_conn
        |> put_req_header("authorization", "Bearer #{jwt}")

        expect(conn.private[:absinthe]).to be_nil
        conn = post(conn, "/graphql")
        expect(conn.private[:absinthe]).to eq(%{context: %{current_user: nil, jwt: nil}})
      end
    end
  end
end
