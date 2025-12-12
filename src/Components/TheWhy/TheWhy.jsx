import React from 'react';
import Logo from "../../Assets/logo.png"; // change to your actual logo file
import "./TheWhy.css";

const TheWhy = () => {
  return (
    <div className="why-section">

      <img src={Logo} alt="Cerulean Logo" className="why-logo" />

      <h2 className="why-title">WHY HOLD THE $CER TOKEN?</h2>

      <p className="why-text">
        CER gives you real advantages inside the Cerulean Ecosystem like discounted services, 
        access to premium features, public recognition on our partner wall, stronger reputation 
        and ecosystem value.
      </p>

      <div className="why-points">
        <p className="why-point">Pay less for audits, verification, testing, and community growth.</p>
        <p className="why-point">Some tools and priority services require CER.</p>
        <p className="why-point">Eligible CER holders can appear on the partner wall for added credibility.</p>
        <p className="why-point">Holding CER signals commitment and trustworthiness to the Web3 community.</p>
        <p className="why-point">CER powers payments, rewards, and interactions across all Cerulean products.</p>
      </div>

      <h3 className="why-final-title">
        ALSO USE CERULEAN LABS TO FIX ALL YOUR WEB3 GROWTH NEEDS. 
        APPLY FOR OUR PARTNER WALL TODAY.
      </h3>

    </div>
  );
};

export default TheWhy;
