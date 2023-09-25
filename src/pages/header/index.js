import React from 'react';
import "./header.css";

function Header() {
  return (
    <section className="banner">
      <div className="banner-movie"></div>
      <div className="banner-info">
        <h2 className="banner-title">Os Smurfs 2</h2>
        <p className="banner-description">Os Smurfs buscam um ingrediente mágico para a fórmula de uma poção 
        que pode mudar o coração do vilão Gargamel e transformá-lo em um ser amigável...</p>
        <button className="banner-button">Assistir agora</button>
      </div>
    </section>
  );
}

export default Header;