import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './QueryType';

function loggingMiddleware(req, res, next) {
    console.log('new request ');
    next();
  }

const app = express();
app.use(loggingMiddleware);
app.use('/graphql', graphqlHTTP({
  schema:schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');