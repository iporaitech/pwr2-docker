# We have to add this file to get the `mix espec` task working from the root of the umbrella:
# https://github.com/antonmi/espec/pull/41#issuecomment-138692291
# I've created this issue asking to change this behaviour:
# https://github.com/antonmi/espec/issues/155
# Hope it will be added soon
ESpec.configure fn(config) ->
end
