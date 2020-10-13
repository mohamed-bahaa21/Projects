import React from "react"

import style from "./StackedCard.style.scss"

const StackedCard = ({ hdate, htitle, aavatar, aname }) => (
    <article class="card">
        <header class="card-header">
            <p>{hdate}</p>
            <h2>{htitle}</h2>
        </header>

        <div class="card-author">
            <a class="author-avatar" href="#">
                <img src={aavatar} />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div class="author-name">
                <div class="author-name-prefix">Author</div>
                {aname}
            </div>
        </div>
        <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
            <a href="#">web-dev</a>
        </div>
    </article>
)

export default StackedCard