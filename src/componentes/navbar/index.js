import React from "react";
import "./navbar.css";


function Navbar() {
  return (
    <header>
      <p className="icon">Iuri Filmes</p>
      <nav>
        <ul className="nav-list">
            <button className="nav-list-button">Bem Vindos</button>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
