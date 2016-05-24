use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.
config :webapp, Webapp.Endpoint,
  secret_key_base: "tBeQO88500wqDlnsa9YWKU3SiOBgyPXXcalQxu+8ElrVDndrWPzeNp0vo6bW5Xsu"

# Configure your database
config :webapp, Webapp.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "webapp_prod",
  pool_size: 20
