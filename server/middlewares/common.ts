import * as bodyParser from 'koa-bodyparser'
import * as logger from 'koa-logger'

export const addBodyParser = app => {
  app.use(bodyParser())
}

export const addLogger = app => {
  app.use(logger())
}