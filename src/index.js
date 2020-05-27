const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs } = require('./models/schema');
const { resolvers } = require('./models/resolvers')

require('dotenv').config()
const app = express();

app
	.use(cors())
	.use(morgan('dev'));

const server = new ApolloServer({
	typeDefs,
	resolvers,
	engine: {
		apiKey: process.env.apiKey,
	}
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)