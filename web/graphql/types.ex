defmodule Webapp.Web.GraphQL.Types do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation

  object :user do
    field :id, :id
    field :username, :string
    field :email, :string
    field :name, :string
  end
end
