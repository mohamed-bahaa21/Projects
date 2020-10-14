import React from "react"

import StackedCardStyle from "./StackedCard.module.scss"

const StackedCard = ({ hdate, htitle, aavatar, aname }) => (
    <article className={StackedCardStyle.card}>
        <header className={StackedCardStyle.cardHeader}>
            <p>{hdate}</p>
            <h2>{htitle}</h2>
        </header>

        <div className={StackedCardStyle.cardAuthor}>
            <a className={StackedCardStyle.authorAvatar} href="#">
                <img src={aavatar} />
            </a>
            <svg className={StackedCardStyle.halfCircle} viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className={StackedCardStyle.authorName}>
                <div className={StackedCardStyle.authorNamePrefix}>Author</div>
                {aname}
            </div>
        </div>
        <div className={StackedCardStyle.tags}>
            <a href="#">html</a>
            <a href="#">css</a>
            <a href="#">web-dev</a>
        </div>
    </article>
)

export default StackedCard