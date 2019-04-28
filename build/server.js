'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _QueryType = require('./QueryType');

var _QueryType2 = _interopRequireDefault(_QueryType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loggingMiddleware(req, res, next) {
  console.log('new request ');
  next();
}

var app = (0, _express2.default)();
app.use(loggingMiddleware);
app.use('/graphql', (0, _expressGraphql2.default)({
  schema: _QueryType2.default,
  graphiql: true
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');