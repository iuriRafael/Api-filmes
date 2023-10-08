import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./header.css";


function Header() {
  const settings = {
    dots: true, // Exibe os pontos indicadores do carrossel
    infinite: true, // Permite que o carrossel role indefinidamente
    speed: 1000, // Velocidade da transição dos slides em milissegundos
    slidesToShow: 1, // Quantidade de slides visíveis por vez
    slidesToScroll: 1, // Quantos slides são rolados a cada mudança
    autoplay: true, // Ativar a reprodução automática
    autoplaySpeed: 3000, // Velocidade da reprodução automática em milissegundos
  };

  return (
    <Slider {...settings}>
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

    <div className="banner">
      <img src="https://th.bing.com/th/id/R.da701df188630136187e84fb0349c64e?rik=oMR74HDrdctSaw&pid=ImgRaw&r=0" className="bg" />

      <div className="content">
        <h4>
          <span>2021</span>
          <span>
            <i>16+</i>
          </span>
          <span>2h 15min</span>
          <span>Ação</span>
        </h4>
        <p>
        Em Resgate, Tyler Rake (Chris Hemsworth) um agente especial recebe a difícil missão de libertar um
         garoto indiano que é mantido refém na cidade de Dhaka. Apesar de estar preparado fisicamente, ele precisa lidar 
         com crises de identidade e com seu 
        emocional fragilizado por problemas do passado para que consiga designar sua tarefa da melhor maneira possível.
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
    </Slider>


  );
}

export default Header;