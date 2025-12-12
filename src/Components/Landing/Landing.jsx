import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord, FaReddit } from "react-icons/fa";
import { SiGmail, SiTelegram } from "react-icons/si";
import Logo from "../../Assets/logo.png";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="landing">
        <img src={Logo} alt="Logo" className="landing-logo" />

        <h1 className="landing-title">Welcome to Cerulean Labs</h1>

        <a href="/home" className="landing-button">Get Started</a>

        <div className="landing-icons">
          <FaXTwitter />
          <FaDiscord />
          <SiGmail />
          <SiTelegram />
          <FaReddit />
        </div>
      </div>
    </div>
  );
};

export default Landing;
