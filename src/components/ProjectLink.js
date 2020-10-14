import React from "react"
import { Link } from "gatsby"

const Project = ({link, name}) => (
    <li>
        <Link to={link}>{name}</Link>
    </li>
)

export default Project