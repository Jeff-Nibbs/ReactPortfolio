import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me3-header.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <h3>Hi, my name is</h3>
        <h1>Daniel Nibbs</h1>
        <h3 className="text-light">Frontend Developer</h3>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
