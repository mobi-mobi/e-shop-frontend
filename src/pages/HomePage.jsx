import React, { useEffect, useState } from "react"

import "./HomePage.css"
import NavbarComponent from "../components/NavbarComponent";
import PromobarComponent from "../components/PromobarComponent";
import HeroSectionComponent from "../components/HeroSectionComponent";
import SwiperComponent from "../components/SwiperComponent";
import {fetchFeaturedKeychains, getLatestKeychains} from "../services/api"
import FooterComponent from "../components/FooterComponent";

function HomePage(){

    const [featuredKeychains, setFeaturedKeychains] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() =>{
        async function loadFeaturedKeychains() {
            try{
                const data = await getLatestKeychains();
                setFeaturedKeychains(data)
            }
            catch(err){
                setError(err.message)
            }
            finally{
                setLoading(false)
            }
        }

        loadFeaturedKeychains()

    }, []);

    if(loading) return(<p>loading page...</p>)
    if(error) return(<p>Error : {error}</p>)

    return(
        <div>
            <div className="bars">
                <PromobarComponent/>
                <NavbarComponent/>
            </div>
            <HeroSectionComponent/>
            <h1 className="swiper-name">LATEST PRODUCTS</h1>
            <SwiperComponent products={featuredKeychains}/>
            <FooterComponent/>
        </div>
    )
}

export default HomePage