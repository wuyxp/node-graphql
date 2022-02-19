import Koa from "koa";
import Router from "@koa/router";
import { graphqlHTTP } from "koa-graphql";
import schema from "./schema";

const app = new Koa();
const router = new Router();

router.all(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV !== "production",
  })
);

app.use(router.routes(), router.allowedMethods());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running at ${PORT}`));
