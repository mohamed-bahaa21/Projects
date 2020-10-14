import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Project from "../components/ProjectLink"


const ProjectsPage = () => (
    <Layout headerTitle="Projects Page">
        <ol>
            <Project link="/projects/stacked-cards/" name="Stacked Cards" />
            
            <Project link="/projects/special-product-card/" name="Special Product Card" />
        </ol>
    </Layout>
)

export default ProjectsPage