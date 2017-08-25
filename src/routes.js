import App from "./App"
import Homepage from "./layouts/Homepage"
import About from "./layouts/About"

const routes = {
  path: "/",
  component: App,
  indexRoute: {component: Homepage},
  childRoutes: [
    {path: "about", component: About},
  ],
}

export default routes
