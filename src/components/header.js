import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = ({ headerTitle }) => (
  <header className={headerStyles.header}>
    <h1 className={headerStyles.title}>{headerTitle}</h1>
    <nav>
      <ul className={headerStyles.navList}>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
