import React, { useState } from 'react';
import "./header.css";


function Header() {

  return (
    <div className="banner">
      <img src="https://i2.wp.com/www.breadforbeggars.com/wp-content/uploads/2020/03/The-Chosen-Logo-Jesus-Jonathan-Roumie.jp_-scaled.jpg?fit=1800%2C1200&ssl=1" className="bg" />

      <div className="content">
        <h4>
          <span>2020</span>
          <span>
            <i>12+</i>
          </span>
          <span>1h 55min</span>
          <span>Religioso</span>
        </h4>
        <p>
        Um pescador carismático se afogando em dívidas, uma mulher problemática lutando com demônios reais. Um publicano talentoso condenado ao ostracismo por sua família e seu povo. Um líder religioso lutando c
        om suas crenças. Veja Jesus através dos olhos daqueles que 
        o conheceram.
        </p>

        <div className="buttons">
          <a href="#">
            <i className="fa fa-play" aria-hidden="true"></i> Assistir
          </a>
          <a href="#">
            <i className="fa fa-plus" aria-hidden="true"></i> Minha Lista
          </a>
        </div>
      </div>

    </div>
  );
}

export default Header;