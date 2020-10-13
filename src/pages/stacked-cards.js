import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import StackedCardsComp from "../components/stacked-cards/stacked-cards.component"

const StackedCards = () => (
  <Layout headerTitle="Home Page">
    <StackedCardsComp />
  </Layout>
)

export default StackedCards