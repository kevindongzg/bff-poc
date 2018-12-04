
import * as Koa from "koa";
import { resolve } from "path";
import * as R from "ramda";
const MIDDLEWARES = ["common", "router"];

const useMiddlewares = (app) => {
  R.map(
    R.compose(
      R.forEachObjIndexed(
        (initWith : any) => initWith(app)
      ),
      require,
      name => resolve(__dirname, `./middlewares/${name}`)
    )
  )(MIDDLEWARES)
}

; (async () => {

  const app = new Koa();
  await useMiddlewares(app);

  app.listen(4455);
})();
