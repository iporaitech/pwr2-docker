defmodule Webapp.PageControllerTest do
  use Webapp.ConnCase, async: true

  describe "index - GET /:app_name" do
    test "renders js bundle specific to :app_name", %{conn: conn} do
      app_name = "any-app-name"
      conn = get(conn, "/#{app_name}")
      assert_html(conn, app_name)
    end
  end

  describe "index - GET /" do
    test "renders core.js", %{conn: conn} do
      conn = get(conn, "/")
      assert_html(conn)
    end
  end

  describe "index - GET /login" do
    test "renders core.js", %{conn: conn} do
      conn = get(conn, "/login")
      assert_html(conn)
    end
  end

  defp assert_html(conn, app_name \\ nil) do
    resp = html_response(conn, 200)
    js_filename = app_name && "#{app_name}.js" || "core.js"

    assert resp =~ "<div id=\"react-root\"></div>"
    assert resp =~ "<script src=\"/js/common.js\"></script>"
    assert resp =~ "<script src=\"/js/#{js_filename}\"></script>"
  end
end
