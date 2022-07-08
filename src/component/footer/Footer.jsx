import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <footer id="footer">
      <a href="#header" className="footer__logo">
        Daniel Nibbs
      </a>

      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://github.com/Jeff-Nibbs"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-nibbs/"
          rel="noreferrer"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=15305379469"
          rel="noreferrer"
          target="_blank"
        >
          <BsWhatsapp />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Daniel Nibbs. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
