defmodule Core.DocController do
  use Core.Web, :controller

  def index(conn, _params) do
    {:ok, app_home_path} = File.cwd
    docs_path = "#{app_home_path}/docs"
    {:ok, list_of_docs_name} = File.ls(docs_path)
    list_of_docs = Enum.map(list_of_docs_name, fn(filename) -> %{title: doc_title(filename), filename: "#{filename}"} end)
    json conn, %{data: list_of_docs}
  end

  def show(conn, %{"_format" => "json", "filename" => filename}) do
    {:ok, app_home_path} = File.cwd
    doc_path = "#{app_home_path}/docs/#{filename}"
    doc_data = File.read!(doc_path)
    json conn, %{data: doc_data}
  end

  def show(conn, %{"filename" => filename}) do
    render conn, Core.PageView, "index.html"
  end

  defp doc_title(doc_name) do
    String.capitalize(String.replace(String.replace(doc_name, "_", " "), ".md", ""))
  end
end
