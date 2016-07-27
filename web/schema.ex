defmodule Webapp.Web.Schema do
  use Absinthe.Schema
  import_types Webapp.Schema.Types

  query do
    @desc "Get all users"
    field :users, list_of(:user) do
      resolve &Webapp.UserResolver.all/2
    end

    @desc "Get user by id"
    field :user, type: :user do
      arg :id, non_null(:id)
      resolve &Webapp.UserResolver.find/2
    end
  end
end
