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
import "./layout.css"

const Layout = (props) => {
  console.log(props);
  return (
    <div>
      <Header headerTitle={props.headerTitle}></Header>

      {props.children}

      <Footer></Footer>
    </div>
  )
}

export default Layout
