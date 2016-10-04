defmodule Webapp.UserSpec do
  use ESpec.Phoenix, model: User
  alias Webapp.User

  @valid_params %{
    first_name: "J",
    last_name: "R",
    email: "j@r.com",
    role: "admin",
    password: "12341234"
  }

  describe "changeset/2" do
    let :min, do: Keyword.fetch!(User.valid_name_length, :min)
    let :max, do: Keyword.fetch!(User.valid_name_length, :max)

    # Apparently is not possible to loop through a list to create examples (it).
    # For example for f <- ~w(first_name last_name), do it "validates length of #{f}" end
    # ** (FunctionClauseError) no function clause matching in ESpec.ExampleHelpers.it/1
    #

    it "validates length of first_name and last_name" do
      expect User.changeset(%User{}, @valid_params).valid?
      |> to(be_true)

      for f <- [:first_name, :last_name] do
        too_short = %{@valid_params | f => String.slice(@valid_params.first_name, 0, min-1)}
        too_long = %{@valid_params | f => String.duplicate("a", max+1)}

        for params <- [too_short, too_long] do
          expect User.changeset(%User{}, params).valid?
          |> to(be_false)
        end

      end
    end
  end # END changeset/2

  describe "registration_changeset/2" do
    it "calls changeset" do
      allow User |> to(accept :changeset)
      User.registration_changeset(%User{}, @valid_params)
      expect User |> to(accepted :changeset, [%User{}, @valid_params])
    end

    it "validates inclusion of role in User.valid_roles" do
      for r <- ["", "anything"] do
        expect User.registration_changeset(%User{}, %{@valid_params | role: r}).valid?
        |> to(be_false)
      end
    end
    it "validates format and uniqueness of email"
    it "validates length of password"
    it "encrypts password hash"
  end # END registration_changeset/2

end
