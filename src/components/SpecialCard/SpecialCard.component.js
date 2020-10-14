import React from "react"

import SpecialCardStyle from "./SpecialCard.module.scss"

const SpecialCard = () => (
    <div className={SpecialCardStyle.SpecialCardPage}>
        <div className={SpecialCardStyle.card}>
            <div className={SpecialCardStyle.imgBx}>
                <img src={require('./assets/headphone.webp')} />
            </div>
            <div className={SpecialCardStyle.contentBx}>
                <h3>Wireless Headphone</h3>
                <h2 className={SpecialCardStyle.price}>$40.<small>99</small></h2>
                <a href="#" className={SpecialCardStyle.buy}>Buy Now</a>
            </div>
        </div>
    </div>
)

export default SpecialCard