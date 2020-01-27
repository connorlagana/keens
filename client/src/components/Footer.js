import React from 'react';
import trip from "../images/trip-advisor.png"
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"

const Footer = () => (
  <footer>
    <div className="icons">
      <a href="https://www.facebook.com/KeensSteakhouse/">
        <img className="footerImage" src={facebook}></img>
      </a>
      <a href="https://www.instagram.com/explore/locations/214011662/keens-steakhouse/">
        <img className="footerImage" src={instagram}></img>
      </a>
      <a href=" https://www.tripadvisor.com/Restaurant_Review-g60763-d425330-Reviews-Keens_Steakhouse-New_York_City_New_York.html">
        <img className="footerImage" src={trip} alt="trip-advisor"></img>
      </a>
    </div>
    <h1 className="address">72 West 36 Street New York NY 10018</h1>
  </footer>
)

export default Footer;
