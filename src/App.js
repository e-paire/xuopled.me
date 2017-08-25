import React, {Component, PropTypes} from "react"
import CircularJSON from "circular-json"
import Head from "./components/Head"
import Header from "./components/Header"
import Footer from "./components/Footer"

import "./styles/index.css"
// import "lato-font/css/lato-font.css"

class App extends Component {
  render() {
    const initialProps = {
      __html: CircularJSON
        .stringify(this.props)
        .replace(/<\/script/g, "<\\/script")
        .replace(/<!--/g, "<\\!--")
    }

    return (
      <html lang="fr">
        <Head title={this.props.title} />
        <body>
          <Header title={this.props.title} />
          <main>
            {this.props.children}
          </main>
          <Footer />
          <script
            id="initial-props"
            type="application/json"
            dangerouslySetInnerHTML={initialProps}
          />
          <script src="/assets/js/bundle.js" />
        </body>
      </html>
    )
  }
}

App.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
}

export default App
