import React from 'react';
import './AppHeader.css';

const AppHeader = () => (
  <header>
    <div className="center-column">
      <h1>🍽 Feed me</h1>
    </div>
    <nav>
      <ol className="center-column">
        <li>
          <a
            onClick={() => {
              window.history.pushState({}, 'browser', '/browser');
            }}
          >
            Browse restaurants
          </a>
        </li>
        <li>
          <a to="/random">Surprise me</a>
        </li>
        <li>
          <a
            onClick={() => {
              window.history.pushState({}, 'restaurant', '/restaurant');
            }}
          >
            restaurant
          </a>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
