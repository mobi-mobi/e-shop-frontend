import "./PromobarComponent.css"
import TextSwiperComponent from "./TextSwiperComponent"

const PromobarComponent = () =>{

    const promoBarTextsLeft = ["1000+ ORDERS", "AWESOME RATING", "AWARD-WINNING STYLE"]
    const promoBarTextsRight = ["FREE SHIPPING OVER 50€", "FAST SHIPPING"]

    return(
        <div className="promobar-cont">
            <TextSwiperComponent textArray={promoBarTextsLeft}/>
            <div className="sale-text-cont">
                <p>SALE 20%</p>
            </div>
            <TextSwiperComponent textArray={promoBarTextsRight}/>
        </div>
    )
}

export default PromobarComponent