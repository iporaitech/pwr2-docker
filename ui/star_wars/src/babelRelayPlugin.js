// TODO: Create a dev version of this that use introspectionQuery to get schema and
// another one that use a schema.json generated file to be compiled with the assets.
const babelRelayPlugin = require('babel-relay-plugin');

/**
 * This should be for production
 */
// const path = require('path');
// const schema = require(path.join(process.env.APP_HOME, 'apps/star_wars/schema.json'));

/**
 * This should be for development
 */
const introspectionQuery = require('graphql/utilities').introspectionQuery;
const request = require('sync-request');
const server = process.env.PWR2_STAR_WARS_GRAPHQL_URL;

// Get the GraphQL schema from the server to be used later by Relay
const response = request('POST', server, {
  qs: {
    query: introspectionQuery
  }
});
const schema = JSON.parse(response.body.toString('utf-8'));

// In the end need we need to export this
module.exports = babelRelayPlugin(schema.data, {
  abortOnError: true,
});
