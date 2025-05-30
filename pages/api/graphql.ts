import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gqlSchema } from "../../graphql/gqlSchema";
import { gqlResolvers } from "../../graphql/gqlResolvers";

const server = new ApolloServer({
  typeDefs: gqlSchema,
  resolvers: gqlResolvers,
});

export default startServerAndCreateNextHandler(server);
