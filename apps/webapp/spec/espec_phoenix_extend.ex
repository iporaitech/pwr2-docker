defmodule ESpec.Phoenix.Extend do
  def model do
    quote do
      alias Webapp.Repo
    end
  end

  def controller do
    quote do
      alias Webapp
      import Webapp.Router.Helpers

      @endpoint Webapp.Endpoint
    end
  end

  def view do
    quote do
      import Webapp.Router.Helpers
    end
  end

  def channel do
    quote do
      alias Webapp.Repo

      @endpoint Webapp.Endpoint
    end
  end

  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
