import path from "path";
import { makeExecutableSchema } from '@graphql-tools/schema';
import {
  mergeTypeDefs,
  mergeResolvers,
} from "@graphql-tools/merge";

import {
  loadFilesSync,
} from "@graphql-tools/load-files";

const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, "./typeDefs"))
);
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "./resolvers"))
);

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
