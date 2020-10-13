import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout headerTitle="Home Page">
    <Link to="/stacked-cards/">Stacked Cards</Link>
  </Layout>
)

export default IndexPage
