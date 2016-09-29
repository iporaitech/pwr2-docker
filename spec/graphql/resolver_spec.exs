defmodule Webapp.GraphQL.ResolverSpec do
  use ESpec
  import Webapp.Factory
  alias Webapp.GraphQL.Resolver

  # TODO: DRY, DRY & DRY !!!
  let :current_user, do: insert(:user)
  let :user, do: insert(:user)

  # NOTE: In the examples below, we stub can? with the expected behaviour
  #       to not rely on possibly changing authorization(roles) rules
  describe "resolve(:user, id, current_user)" do
    context "when current_user can read User idenfified by id" do
      before do: allow(Canada.Can).to accept(:can?, fn(_, _, _) -> true end)
      it "returns {:ok, user}" do
        expect(Resolver.resolve(:user, user.id, current_user)).to eq({:ok, user})
      end
    end
    context "when id DOES NOT identify any User" do
      before do: allow(Canada.Can).to accept(:can?, fn(_, _, _) -> true end)
      it "returns {:ok, nil}" do
        expect(Resolver.resolve(:user, 999, current_user)).to eq({:ok, nil})
      end
    end
    context "when current_user CAN'T read User idenfified by id" do
      before do: allow(Canada.Can).to accept(:can?, fn(_, _, _) -> false end)
      it "returns {:error, \"Unauthorized\" }" do
        expect(Resolver.resolve(:user, user.id, current_user)).to eq({:error, "Unauthorized"})
      end
    end
  end

  describe "resolve(_, _, nil)... current_user is nil" do
    it "returns {:error, \"User not signed in\"}" do
      expect(Resolver.resolve(:user, user.id, nil)).to eq({:error, "User not signed in"})
    end
  end

  # TODO: Don't forget to remove this StarWars stuff after extracting for pwr2-docker
  describe "StarWars examples" do
    describe "resolve(:ship, id, current_user)" do
      let :ship do
<<<<<<< HEAD:spec/graphql/resolver_spec.exs
        {:ok, ship} = Webapp.GraphQL.StarWarsDB.get(:ship, "1")
=======
        {:ok, ship} = Starwars.GraphQL.DB.get(:ship, "1")
>>>>>>> e4b98bf... Rename StarwarsDB to DB:apps/webapp/spec/graphql/resolver_spec.exs
        ship
      end
      context "when current_user can read Ship idenfified by id" do
        it "returns {:ok, ship}" do
          expect Resolver.resolve(:ship, ship.id, current_user |> make_superadmin)
          |> to(eq {:ok, ship})
        end
      end
      context "when id DOES NOT identify any Ship" do
        it "returns {:ok, nil}" do
          expect Resolver.resolve(:ship, "xxx", current_user |> make_superadmin)
          |> to(eq {:ok, nil})
        end
      end
      context "when current_user CAN'T read Ship idenfified by id" do
        it "returns {:error, \"Unauthorized\" }" do
          expect Resolver.resolve(:ship, ship.id, current_user)
          |> to(eq {:error, "Unauthorized"})
        end
      end
    end

    describe "resolve(:faction, id, current_user)" do
      let :faction do
<<<<<<< HEAD:spec/graphql/resolver_spec.exs
        {:ok, faction} = Webapp.GraphQL.StarWarsDB.get(:faction, "1")
=======
        {:ok, faction} = Starwars.GraphQL.DB.get(:faction, "1")
>>>>>>> e4b98bf... Rename StarwarsDB to DB:apps/webapp/spec/graphql/resolver_spec.exs
        faction
      end
      context "when current_user can read Faction idenfified by id" do
        it "returns {:ok, faction}" do
          expect Resolver.resolve(:faction, faction.id, current_user |> make_superadmin)
          |> to(eq {:ok, faction})
        end
      end
      context "when id DOES NOT identify any Faction" do
        it "returns {:ok, nil}" do
          expect Resolver.resolve(:faction, "xxx", current_user |> make_superadmin)
          |> to(eq {:ok, nil})
        end
      end
      context "when current_user CAN'T read Faction idenfified by id" do
        it "returns {:error, \"Unauthorized\" }" do
          expect Resolver.resolve(:faction, faction.id, current_user)
          |> to(eq {:error, "Unauthorized"})
        end
      end
    end
  end

end
