import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { ApolloServer, gql } from 'apollo-server-express';

import { typeDefs } from './models/gqSchema';
import { resolvers } from './models/resolvers'

const app = express();

app
	.use(cors())
	.use(morgan('dev'));

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)