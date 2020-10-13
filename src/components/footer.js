import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import "./footer.module.scss"

const Footer = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      <h3>{data.site.siteMetadata.author} © 2020</h3>
    </footer>
  )
}

export default Footer
