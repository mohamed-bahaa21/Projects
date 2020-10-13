import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import StackedCards from "../components/StackedCards/StackedCards.component"

const StackedCardsPage = () => (
  <Layout headerTitle="Home Page">
    <StackedCards />
  </Layout>
)

export default StackedCardsPage