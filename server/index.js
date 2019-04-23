require("dotenv").config();
// import { GraphQLServer, PubSub } from "graphql-yoga";
const { ApolloServer } = require('apollo-server');
import mongoose from "mongoose";

//import schema from "../graphql/";
import schema  from "../graphql/";
import { models } from "./config/db/";

const { mongoURI: db } = process.env;

// const pubsub = new PubSub();

// const options = {
//   port: process.env.PORT || "4000",
//   endpoint: "/graphql",
//   subscriptions: "/subscriptions",
//   playground: "/playground"
// };

// const context = {
//   models,
//   pubsub
// };

// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//const server = new GraphQLServer({
//  schema,
//  context
//});

const server = new ApolloServer({
  schema,
  models,
  introspection: true,
  playground: true
});

server.listen().then(({ port }) => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});

// server.listen(options, ({ port }) => {
//   console.log(`🚀 Server is running on http://localhost:${port}`);
// });
