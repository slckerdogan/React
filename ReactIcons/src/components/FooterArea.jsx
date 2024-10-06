import React from "react";
import '../css/FooterArea.css'

import {
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

export default function FooterArea() {
  return (
    <footer>
      <div className="mainArea">
        <div className="iconsArea">
          <div className="icons"><FaInstagram /></div>
          <div className="icons"><FaFacebook /></div>
          <div className="icons"><FaGithub /></div>
          <div className="icons"><FaTwitter /></div>
          <div className="icons"><FaTelegram /></div>      
        </div>
        <div className="copyright">Copyright &copy; 2024 KADU</div>
      </div>
    </footer>
  );
}