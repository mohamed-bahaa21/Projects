import React from "react"
import { Link } from "gatsby"

const Header = ({ headerTitle }) => (
  <header>
    <h1>{headerTitle}</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
