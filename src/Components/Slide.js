import React from 'react';
import './CardImage.css';

const Navbar = () => {
  return (
    <div className="card-container">
      <div className="container">
        <input type="radio" name='inputradios' id='radio1' className='input-slide' />
        <input type="radio" name='inputradios' id='radio2' className='input-slide' />
        <input type="radio" name='inputradios' id='radio3' className='input-slide' />
        <input type="radio" name='inputradios' id='radio4' className='input-slide' />
      </div>


      <div className='img-slide'>
      <img src="https://img.nsctotal.com.br/wp-content/uploads/2024/06/Alicent-Hightower-e-Rhaenyra-Targaryen-em-A-Casa-do-Dragao.-Foto-Divulgacao-HBO-Max-2.jpg" className="card-image" />
      <img src='https://images.thedirect.com/media/article_full/boyst.jpg' className="card-image"/>
      <img src='https://www.jornalcontabil.com.br/images/noticias/54481/22cf2ca2faeda47357abe912d37ec8b4.jpg' className="card-image" />
      <img src='https://static0.colliderimages.com/wordpress/wp-content/uploads/2024/06/bad-boys_-ride-or-die-poster-2024.jpg' className="card-image" />
      <img src='https://www.nerdpool.it/wp-content/uploads/2024/06/the-penguin-serie-trailer-1068x601.webp' className="card-image" />
      <img src="https://rollingstone.com.br/media/_versions/2024/08/onde-assistir-a-cidade-de-deus-a-luta-nao-para-serie-derivada-do-longa-de-sucesso-de-2002_widelg.jpg" className="card-image" />
      </div>
      </div>
  );
};

export default Navbar;
