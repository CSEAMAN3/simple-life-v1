import "./Header.css";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <div className="logo-container">
          <h1 className="logo">The Simple Life</h1>
          <span className="logo-strapline">A guide to minimilist living</span>
        </div>
      </div>
    </header>
  );
}
