var babelRelayPlugin = require('babel-relay-plugin');
var introspectionQuery = require('graphql/utilities').introspectionQuery;
var request = require('sync-request');

// Get the GraphQL schema from the server to be used later by Relay
var response = request('GET', 'http://localhost:4000/graphql', {
  qs: {
    query: introspectionQuery
  }
});

var schema = JSON.parse(response.body.toString('utf-8'));
console.log('=== THE SCHEMA IS ===');
console.log(schema);
console.log('=====================');

module.exports = babelRelayPlugin(schema.data, {
  abortOnError: true,
});
