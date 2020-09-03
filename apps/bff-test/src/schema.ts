import { join } from 'path';
import { GraphQLSchema } from 'graphql';
import { loadSchemaSync } from '@graphql-tools/load';
import { mergeSchemas } from '@graphql-tools/merge';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

import { resolvers } from './resolvers';

const testSchema = loadSchemaSync(join(__dirname, 'gql', 'test.gql'), { loaders: [new GraphQLFileLoader()] });

export const schema: GraphQLSchema = mergeSchemas({
  schemas: [
    testSchema
  ],
  resolvers
});
