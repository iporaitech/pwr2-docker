// TODO: Create a dev version of this that use introspectionQuery to get schema and
// another one that use a schema.json generated file to be compiled with the assets.
const babelRelayPlugin = require('babel-relay-plugin');

/**
 * This should be for production
 */
// const path = require('path');
// const schema = require(path.resolve('schema.json'));

/**
 * This should be for development
 */
const introspectionQuery = require('graphql/utilities').introspectionQuery;
const request = require('sync-request');
// Get the GraphQL schema from the server to be used later by Relay
const response = request('GET', process.env.GRAPHQL_URL, {
  qs: {
    query: introspectionQuery
  }
});
const schema = JSON.parse(response.body.toString('utf-8'));

// In the end need we need to export this
module.exports = babelRelayPlugin(schema.data, {
  abortOnError: true,
});
