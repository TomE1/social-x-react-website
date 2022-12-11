import React, { useState } from "react";
import "./Navbar.css";
import { SiAnaconda } from "react-icons/si";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import Button from "../UI/button/Button";
import "../UI/button/Button.css";

const Navbar = () => {
  return (
    <nav className="container navbar">
      <div className="logo">
        <SiAnaconda color="#fff" size="33px" />
        <p className="logo-text">
          Social <span>X</span>
        </p>
      </div>

      <menu>
        <ul
          className="nav-links"
          id='{showMenu ? "nav-links-mobile" : "nav-links-hide"}'
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="#">Subscribe</a>
          </li>

          <li className="nav-btn">
            <a href="#" className="btn btn-dark">
              Keep Going
            </a>
          </li>
        </ul>
      </menu>
    </nav>
  );
};

export default Navbar;
