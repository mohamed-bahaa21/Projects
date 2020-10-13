import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import StackedCards from "../components/StackedCards/StackedCards.component"

const ProjectsPage = () => (
    <Layout headerTitle="Projects Page">
        <ol>
            <li>
                <Link to="/projects/stacked-cards/">Stacked Cards</Link>
            </li>
            <li>
                <Link to="/book-image/">3D Book Image Generator</Link>
            </li>
        </ol>
    </Layout>
)

export default ProjectsPage