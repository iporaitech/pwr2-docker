defmodule Webapp.GraphQL.Types.Viewer do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation

  node object :user do
    field :first_name, :string
    field :last_name, :string
    field :email, :string
    field :telephone, :string
  end

  object :viewer do
    field :profile, :user
  end

  object :viewer_field do
    field :viewer, :viewer do
      resolve fn
        _, %{context: %{current_user: current_user}} ->
          {:ok, %{profile: current_user}}
      end
    end
  end
end
