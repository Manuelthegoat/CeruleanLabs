import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import "./Search.css";

const Search = () => {
  return (
    <div className="search-section">

      {/* Search Input */}
      <div className="search-input-container">
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          className="search-input"
          placeholder="Search project name / token"
        />
      </div>

      {/* Text */}
      <p className="search-subtitle">
        OVER 700 WEB3/CRYPTO PROJECTS ON OUR RADAR
      </p>

      <h2 className="search-title">WHY WE ARE HERE?</h2>

      <p className="search-tag">WE ARE HERE BECAUSE WEB3 NEEDS:</p>

      {/* Cards */}
      <div className="search-cards">

        <div className="search-card">
          <FaCheckCircle className="card-icon" />
          <h3 className="card-title">VERIFIED IDENTITIES:</h3>
          <p className="card-text">
            Too many fake teams, anonymous founders, and unverifiable contributors.
          </p>
        </div>

        <div className="search-card">
          <FaCheckCircle className="card-icon" />
          <h3 className="card-title">ACCOUNTABILITY:</h3>
          <p className="card-text">
            A system that ensures founders and contributors are truly who they claim to be.
          </p>
        </div>

        <div className="search-card">
          <FaCheckCircle className="card-icon" />
          <h3 className="card-title">TRANSPARENCY:</h3>
          <p className="card-text">
            Eliminating scams, rug pulls, and untrusted actors in the ecosystem.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Search;
