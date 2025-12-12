import React from 'react'
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      
      <div className="welcome-tag">
        Welcome To Cerulean Hub
      </div>

      <h1 className="welcome-title">
        The only <span className="highlight">Ecosystem</span> with a 
        universal <span className="highlight">Verified</span> identity 
        <span className="highlight"> System.</span>
      </h1>

      <p className="welcome-text">
        Everything you need to launch, grow and sustain your web3 project, <br />
        Powered with $CER
      </p>

      <div className="welcome-buttons">
        <button className="btn-primary">Learn More</button>
        <button className="btn-outline">Contact Us</button>
      </div>

    </div>
  )
}

export default Welcome
