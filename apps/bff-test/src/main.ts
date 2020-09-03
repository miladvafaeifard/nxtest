import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import helmet from 'helmet';
import { schema } from './schema';

export const app: Application = express();


const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)]
});

server.applyMiddleware({ app, path: '/api' });
app.use(helmet());
app.listen({ port: 3000 }, () => {
  console.log(`\n 🚀 GraphQL is now running on http://localhost:3000/api`);
});
