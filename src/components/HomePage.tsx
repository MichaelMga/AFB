import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="search-bar-container">
        <form className="search-bar">
          <div className="search-bar-input">
            <input type="text" placeholder="Search for pictures and videos" />
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
