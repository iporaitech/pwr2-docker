defmodule Webapp.Repo.Migrations.CreateExtensionCitext do
  use Ecto.Migration

  # For info about citext see:
  # https://www.postgresql.org/docs/9.1/static/citext.html
  def up do
    execute("CREATE EXTENSION citext;")
  end

  def down do
    execute("DROP EXTENSION citext;")
  end
end
