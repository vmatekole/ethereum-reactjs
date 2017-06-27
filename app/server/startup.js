// app/server/startup.js
import { createApolloServer } from 'meteor/apollo';
// import path from 'path';
// import { mergeGraphqlSchemas } from 'merge-graphql-schemas';

// const mergedSchemas = mergeGraphqlSchemas(path.join(__dirname, '../graphql'));
import { makeExecutableSchema } from 'graphql-tools';

import { typeDefs, resolvers } from '/imports/graphql/index';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
createApolloServer({
  schema
});