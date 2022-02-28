import React from 'react'
import { FaFacebook, FaInstagram, FaMinus, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
        <div className="top">
            <div className="left">
                <p>
                    pAyZone
                </p>

                <div className="links">
                    <span>Products</span>
                    <span>Support</span>
                    <span>Careers</span>
                    <span>Terms of Use - US</span>
                    <span>Terms of Use - Africa + UK</span>
                    <span>Terms of Use - Nigeria</span>
                </div>
            </div>

            <div className="right">
                <p>How Can We Help</p>
                <span>
                    <FaMinus/> 
                    Learn More
                </span> | <p>Support via In-App Chat</p>
            </div>
        </div>

        <div className="bottom">
            <div className="content">
                <p>© 2021-2022 Critical Ideas, Inc.</p>
                <p>Voyse Technologies US, Inc. NMLS ID: 2266748</p>
            </div>
            <div className="content">
                <p>Product availability may vary by market.</p>
            </div>
            <div className="icons">
                <span>Follow us:</span>
                <span><FaFacebook  style={{backgroundColor:'white'}}/> </span>
                <span><FaTwitter style={{backgroundColor:'white'}}/> </span>
                <span><FaInstagram style={{backgroundColor:'white'}}/> </span>
                <span><FaYoutube style={{backgroundColor:'white'}}/></span>
            </div>
        </div>
    </footer>
  )
}

export default Footer