defmodule ESpec.Phoenix.Extend do
  def model do
    quote do
      alias Core.Repo
    end
  end

  def controller do
    quote do
      alias Core
      import Core.Router.Helpers

      @endpoint Core.Endpoint
    end
  end

  def view do
    quote do
      import Core.Router.Helpers
    end
  end

  def channel do
    quote do
      alias Core.Repo

      @endpoint Core.Endpoint
    end
  end

  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
