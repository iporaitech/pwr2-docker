defmodule Core.DocController do
  use Core.Web, :controller
  @docs_path System.get_env("APP_HOME") <> "/docs"

  def index(conn, _params) do
    {:ok, list_of_docs_name} = File.ls(@docs_path)
    list_of_docs = Enum.map(list_of_docs_name, fn(filename) ->
      %{title: doc_title(filename), filename: "#{filename}"}
    end)
    json conn, %{data: list_of_docs}
  end

  def show(conn, %{"_format" => "json", "filename" => filename}) do
    {:ok, app_home_path} = File.cwd
    doc_path = "#{@docs_path}/#{filename}"
    doc_data = File.read!(doc_path)
    json conn, %{data: doc_data}
  end

  def show(conn, %{"filename" => filename}) do
    render conn, Core.PageView, "index.html"
  end

  defp doc_title(doc_name) do
    doc_name
    |> String.replace("_", " ")
    |> String.replace(".md", "")
    |> String.capitalize
  end
end
