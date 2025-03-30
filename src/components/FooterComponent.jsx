import "./FooterComponent.css"

import React from 'react'

const FooterComponent = () => {
  return (
    <div className="footer-wrapper">
        <div className="upper-cont">
            <h1>CUTE KEYCHAINS</h1>
            <div className="all-links-cont">
                <div className="link-cont">
                    <h2>SHOP</h2>
                    <ul>
                        <li><a href="">Cart</a></li>
                        <li><a href="">Shop</a></li>
                    </ul>
                </div>

                <div className="link-cont">
                    <h2>FOLLOW US</h2>
                    <ul>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">TikTok</a></li>
                    </ul>
                </div>

                <div className="link-cont">
                    <h2>PRIVACY</h2>
                    <ul>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <p>© 2025 CUTE KEYCHAINS</p>
    </div>
  )
}

export default FooterComponent