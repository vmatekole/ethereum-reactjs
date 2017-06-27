// app/imports/graphql/index.js;
import _ from 'lodash';
// Entry point for merging all GraphQL resolvers/schemas in the system.

import fs from 'fs';
import path from 'path';
import { mergeStrings } from 'gql-merge';
import ethResolvers from './resolvers/ethResolvers';


let result = {};

function mergeGraphQLDir(dirName) {
  if (dirName == null) return;
  let graphqlDir = path.resolve(process.env.PWD, `imports/graphql/${dirName}`);
  let graphqlFiles = fs.readdirSync(graphqlDir);
  let types = graphqlFiles.map(file => fs.readFileSync(path.join(graphqlDir, file), 'utf-8'));
  return mergeStrings(types);
}
const mergedSchemas = mergeGraphQLDir('schemas');
const mergedResolvers = _.merge(ethResolvers); // Merge your resolvers here.

export { mergedResolvers as resolvers };
export { mergedSchemas as typeDefs };


