import React from "react";

export default function Neavbar() {
  return (
    <div className="nav-bar">
      {/* nav-conten */}
      <div className="nav-conten">
        {/* logo */}
        <div className="nav-logo">
          <h1>Logo</h1>
        </div>
        {/* nav-items */}
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
