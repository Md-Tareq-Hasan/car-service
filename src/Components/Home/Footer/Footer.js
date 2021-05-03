import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container d-flex ">
            <div className="  col-md-4 ml-5 ">
                <img src="http://wpkixx.com/html/car-carry/images/logo-black.png" alt="" />

                <p className="mt-4">The trio took this simple idea and built it into the world’s leading carpooling platform, connecting millions of people going the same way.</p>
                <div className="footer-icon mt-5">
                    <a href=""> <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/BHkEd6znUYJ.png" alt="" /></a>
                    <a href=""> <img src="https://variety.com/wp-content/uploads/2017/08/instagram-logo.png?w=681&h=383&crop=1" alt="" /></a>
                    <a href="">  <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="" /></a>
                </div>
            </div>
            <div className="col-md-4  ml-5">
                <h3>Useful Links</h3>
                <div className="mt-4">
                    <a href="">Leasing</a>
                    <br />
                    <a href="">Submit Route</a>
                    <br />
                    <a href="">How Does It Work?</a>
                    <br />
                    <a href="">Agent Listings</a>
                </div>
                <br />
                <br />
                <h6 className="mt-5">2021.All Rights Reserved.</h6>
            </div>
            <div className="col-md-4 ml-5">
                <h3>Download App</h3>
                <br />
                <img style={{ width: '40px' }} src="https://pngimg.com/uploads/android_logo/android_logo_PNG17.png" alt="" />
                <img style={{ width: '50px', marginLeft: "40px" }} src="https://cdn0.iconfinder.com/data/icons/zoldo-miscellaneous-002/64/mac_apple_os_ios_logo-512.png" alt="" />
                <br />
                <img className="mt-5" src="http://wpkixx.com/html/car-carry/images/resources/footer-mockup.png" alt="" />
            </div>
        </div>
    );
};

export default Footer;