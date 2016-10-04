defmodule Webapp.User do
  use Webapp.Web, :model

  schema "users" do
    field :first_name, :string
    field :last_name, :string
    field :email, :string
    field :phone, :string
    field :role, :string
    field :password, :string, virtual: true
    field :password_hash, :string

    timestamps
  end

  # Default validations params used by changesets
  #

  @valid_name_length [min: 1, max: 64]
  @valid_password_length [min: 8, max: 120]
  @valid_email_format ~r/@/
  @valid_roles ~w(superadmin admin client)

  def valid_name_length, do: @valid_name_length
  def valid_roles, do: @valid_roles

  # changesets
  #

  def changeset(model, params \\ :empty) do
    # we need validate_required below because cast/3 filters "" fields out.
    model
    |> cast(params, ~w(first_name last_name phone))
    |> validate_required([:first_name, :last_name])
    |> validate_length(:first_name, @valid_name_length)
    |> validate_length(:last_name, @valid_name_length)
  end

  def registration_changeset(model, params) do
    # See https://github.com/antonmi/espec#limitations for info about why use __MODULE__
    model
    |> __MODULE__.changeset(params)
    |> cast(params, [:email, :password, :role])
    |> validate_required([:email, :password, :role])
    |> validate_inclusion(:role, @valid_roles)
    |> validate_format(:email, @valid_email_format)
    |> unique_constraint(:email)
    |> validate_length(:password, @valid_password_length)
    |> encrypt_passwd()
  end


  # Helper functions
  #
  defp encrypt_passwd(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: passwd}} ->
        put_change(changeset, :password_hash, Comeonin.Bcrypt.hashpwsalt(passwd))
      _ ->
        changeset
    end
  end

end
