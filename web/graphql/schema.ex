defmodule Webapp.Web.GraphQL.Schema do
  use Absinthe.Schema
  alias Webapp.Web.GraphQL.UserResolver, as: UserResolver
  import_types Webapp.Web.GraphQL.Types

  query do
    @desc "Get all users"
    field :users, list_of(:user) do
      resolve &UserResolver.all/2
    end

    @desc "Get user by id"
    field :user, type: :user do
      arg :id, non_null(:id)
      resolve &UserResolver.find/2
    end
  end
end
