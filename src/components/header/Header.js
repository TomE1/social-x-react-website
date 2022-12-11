import React from "react";
import "./Header.css";
import phoneHeader from "../../assets/phone-header-bg.png";
import Button from "../UI/button/Button";
import "../UI/button/Button.css";
import { BsMouse } from "react-icons/bs";

const Header = () => {
  return (
    <section className="header">
      <div className="container header">
        <div className="header-left">
          <h1>
            <span>THE WORLD'S LEADING</span>
            <span>CROSS-PLATFORM SECURE</span>
            <span>MESSAGING SYSTEM</span>
          </h1>
          <p className="u-text-small u-text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
            justo leo. Phasellus mauris turpis, malesuada a dolor ac.
          </p>
        </div>
        <div className="header-right">
          <img src={phoneHeader} alt="phone" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
