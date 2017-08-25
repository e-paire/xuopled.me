import React from "react"
import ReactDOMServer from "react-dom/server"
import {RouterContext, match, createMemoryHistory} from "react-router"
import routes from "./routes"

export default (locals, callback) => {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)
  match({routes, location}, (error, redirectLocation, renderProps) => {
    callback(null, `<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(<RouterContext {...renderProps} />)}`)
  })
}
