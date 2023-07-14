import Header from './header/Header'
import iconpagedown from "../images/iconpagesdown.png"
import iconpageup from "../images/iconpagesup.png"
import desenhowrapper from "../images/desenhowrapper.png"
import Data from './Data'
import Card from './Card'
import product1 from  "../../src/images/product1.png"
import product2 from  "../../src/images/products2.png"
import product3 from  "../../src/images/product3.png"
import product4 from  "../../src/images/product4.png"
import React, {useRef} from 'react'
// import Sidebar from './Sidebar'
import Beam from './Beam'

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

  const divRefs = {
    div1: useRef(null),
    div2: useRef(null),
    div3: useRef(null),
    div4: useRef(null),
  };

  const scrollToDiv = (ref) => {
    if (ref) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
        <Header/>
        <Sidebar/>
            <div className="home" ref={divRefs.div1}>
            <div className="text-container">
                  <div className='text-wrapper'>
                    <h1>Início</h1>
                      <button className='btn-move' onClick={() => scrollToDiv(divRefs.div2)}><img src={iconpagedown}/></button>
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
              <div className="products" ref={divRefs.div2}>
                <div className="text-container">
                    <div className="text-wrapper">
                    <button className='btn-move'onClick={() => scrollToDiv(divRefs.div1)} ><img src={iconpageup}/></button>
                    <h1>Produtos</h1>
                    <button className='btn-move' onClick={() => scrollToDiv(divRefs.div3)} ><img src={iconpagedown}/></button>
                </div>
                </div>
                <div className="products-container">
                  <div className="block-1">
                     <img src={product2}></img>
                     <img src={product3}></img>
                 </div>x
                  <div className="block-2">
                     <img src={product1}></img>
                     <img src={product4}></img>
                  </div>
                  </div>
              </div>
              <div className="avaliacoes" ref={divRefs.div3}>
                <div className="text-container">
                  <div className="text-wrapper">
                  <button className='btn-move' onClick={() => scrollToDiv(divRefs.div2)}><img src={iconpageup}/></button>
                    <h1>Avaliações</h1>
                  <button className='btn-move' onClick={() => scrollToDiv(divRefs.div4)}><img src={iconpagedown}/></button>
                  </div>
                </div>
                <div className="avaliacoes-container">
                  <div className="reviews">
                    {cards}
                  </div>
                </div>
              </div>
              <div className='contato' ref={divRefs.div4}>
                <div className='contato-wrapper'>
                <div className="text-container">
                  <div className="text-wrapper">
                  <button className='btn-move' onClick={() => scrollToDiv(divRefs.div3)}><img src={iconpageup}/></button>
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
                <Beam/>
              </div>
       </div>
  )
}

export default Home
