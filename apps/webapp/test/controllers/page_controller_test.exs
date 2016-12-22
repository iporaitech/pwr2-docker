defmodule Webapp.PageControllerTest do
  use Webapp.ConnCase, async: true

  test "GET /:app_name", %{conn: conn} do
    app_name = "any-app-name"

    response =
      get(conn, "/#{app_name}")
      |> html_response(200)

    assert response =~ "<script src=\"/js/vendor.js\"></script>"
    assert response =~ "<div id=\"react-root\"></div>"
  end
end
