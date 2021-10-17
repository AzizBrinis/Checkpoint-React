import React from "react";
import "./Footer.css";

const currentYear = new Date().getFullYear();
const Footer = () => (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
    );


export default Footer;