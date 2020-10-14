import React from "react"

import StackedCardsStyle from "./StackedCards.module.scss"
import StackedCard from "./StackedCard/StackedCard.component.js"

const StackedCards = () => (
    <div className={StackedCardsStyle.stackedCardsPage}>

        <section className={StackedCardsStyle.cardList}>
            <StackedCard
                hdate="Sep 11th 2020"
                htitle="Card Tricks are fun!"
                aavatar="https://api.adorable.io/avatars/172/a.png"
                aname="Zheng Zhilong"
            />

            <StackedCard
                hdate="Sep 11th 2020"
                htitle="Card Tricks are fun!"
                aavatar="https://api.adorable.io/avatars/172/a.png"
                aname="Zheng Zhilong"
            />

            <StackedCard
                hdate="Sep 11th 2020"
                htitle="Card Tricks are fun!"
                aavatar="https://api.adorable.io/avatars/172/a.png"
                aname="Zheng Zhilong"
            />

            <StackedCard
                hdate="Sep 11th 2020"
                htitle="Card Tricks are fun!"
                aavatar="https://api.adorable.io/avatars/172/a.png"
                aname="Zheng Zhilong"
            />

            <StackedCard
                hdate="Sep 11th 2020"
                htitle="Card Tricks are fun!"
                aavatar="https://api.adorable.io/avatars/172/a.png"
                aname="Zheng Zhilong"
            />
        </section>

    </div>
)

export default StackedCards