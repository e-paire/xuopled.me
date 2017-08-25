import React, {PropTypes} from "react"
import {Link} from "react-router"

const Header = ({title}) => (
  <header>
    <h1>{title}</h1>
    <Link to="/">Index</Link>
    <Link to="/about">About</Link>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
