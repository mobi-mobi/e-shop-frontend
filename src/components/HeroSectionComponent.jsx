import {Link} from "react-router-dom"
import "./HeroSectionComponent.css"

const HeroSectionComponent = () =>{
    return(
        <div className="herosection-cont">
            <Link className="hero-link" to="/products">Dive Deeper</Link>
        </div>
    )
}

export default HeroSectionComponent