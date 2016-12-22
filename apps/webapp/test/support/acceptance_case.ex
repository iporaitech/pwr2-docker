defmodule Webapp.AcceptanceCase do
  use ExUnit.CaseTemplate

  using do
    quote do
      use Wallaby.DSL

      import Webapp.Router.Helpers
      import Webapp.Factory
      import Webapp.AcceptanceCase

      # The default endpoint for testing
      @endpoint Webapp.Endpoint
    end
  end

  setup tags do
    # {:ok, session} = Wallaby.start_session(metadata: metadata)
    # {:ok, session: session}
    :ok
  end

end
