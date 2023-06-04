import React, {useState, useEffect} from 'react'
import Header from './header/Header'
import iconpagedown from "../images/iconpagesdown.png"
import iconpageup from "../images/iconpagesup.png"
import desenhowrapper from "../images/desenhowrapper.png"
import circle from "../images/circle.png"
import Data from './Data'
import Card from './Card'

function Home() {


  const randomIndices = [];

  while (randomIndices.length < 3) {
    const randomIndex = Math.floor(Math.random() * Data.length);
  
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }
  
  const cards = randomIndices.map((randomIndex, index) => {
    const randomItem = Data[randomIndex];
  
    return (
      <div key={index}>
        <Card
          img={randomItem.img}
          name={randomItem.name}
          opinion={randomItem.opinion}
        />
      </div>
    );
  });


  
  return (
    <div>
        <Header/>
            <div className="home"> 
            <div className="text-container">
                  <div className='text-wrapper'>
                    <h1>Início</h1>
                    <button className='btn-move'><img src={iconpagedown}/></button>
                  </div>
                </div>
                <div className="chart-container">
                  <div className="chart-wrapper">
                      <p>Descubra os segredos do universo com as poções mágicas e feitiços 
                        poderosos da Casa das Runas, onde o futuro se revela em cada estrela.</p>
                      <div className="img-bx">
                        <img src={desenhowrapper}/>
                        </div>
                  </div>
                  <div>
                </div>
              </div>
            </div>
              <div className="products">
                <div className="text-container">
                    <div className="text-wrapper">
                    <button className='btn-move'><img src={iconpageup}/></button>
                    <h1>Produtos</h1>
                    <button className='btn-move'><img src={iconpagedown}/></button>
                </div>
                </div>
                <div className="products-container">
                  <div className="block-1">
                     <img src={circle}></img>
                     <img src={circle}></img>
                 </div>
                  <div className="block-2">
                     <img src={circle}></img>
                     <img src={circle}></img>
                  </div>
                  </div>
              </div>
              <div className="avaliacoes">
                <div className="text-container">
                  <div className="text-wrapper">
                  <button className='btn-move'><img src={iconpageup}/></button>
                    <h1>Avaliações</h1>
                  <button className='btn-move'><img src={iconpagedown}/></button>
                  </div>
                </div>
                <div className="avaliacoes-container">
                  <div className="reviews">
                    {cards}
                  </div>
                </div>
              </div>
              <div className='contato'>
                <div className="text-container">
                  <div className="text-wrapper">
                  <button className='btn-move'><img src={iconpageup}/></button>
                    <h1>Entre em Contato</h1>
                  </div>
                </div>
                <div className="contato-container">
                  <h1>
                    Em uma noite de lua cheia, deseje do fundo do seu coração 
                    ajuda para os seus problemas, e clame por socorro de um dos 
                    magos da casa das runas. 
                  </h1>
                  <h1>
                    Ou mande um e-mail:
                    casadasrunas@alvorecer.feudal.ds
                  </h1>
                </div>
              </div>
       </div>
  )
}

export default Home