import React from 'react'
import Header from './header/Header'
import iconpagesdown from "../img/iconpagesdown.png"
import desenhowrapper from "../img/desenhowrapper.png"

function Home() {

  
  /*
  window.addEventListener("scroll", function ()  {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
  })

  */

  return (
    <div>
        <Header/>
            <div className="home"> <div className="inicio-container">
                  <div className='inicio-wrapper'>
                    <h1>Início</h1>
                    <button className='btn-move'><img src={iconpagesdown}/></button>
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
            <div className="produtos">
              <div className="test">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis cumque 
                veniam quasi eaque velit quo et suscipit fugiat deserunt at, quis consequatur, 
                sed deleniti. Delectus vel cupiditate veniam optio repellendus.
              </div>
            </div>
       </div>
  )
}

export default Home