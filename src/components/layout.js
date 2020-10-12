/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  console.log(props)
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.layoutContent}>
        <Header></Header>
        <br></br>
        <h1>{props.headerTitle}</h1>

        <div className={layoutStyles.pageContent}>{props.children}</div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Layout
