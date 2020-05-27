const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs } = require('./src/models/schema');
const { resolvers } = require('./src/models/resolvers')

require('dotenv').config()
const app = express();

app
	.use(cors())

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