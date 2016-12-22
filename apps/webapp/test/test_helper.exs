# TODO: install phantomjs in Dockerfile to enable this conf
# {:ok, _} = Application.ensure_all_started(:wallaby)
# Application.put_env(:wallaby, :base_url, Webapp.Endpoint.url)

# By default exclude slow and expensive feature test
ExUnit.configure(exclude: [feature: true])

ExUnit.start
