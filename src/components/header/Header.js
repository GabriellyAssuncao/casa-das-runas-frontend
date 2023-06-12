import React, { useEffect } from "react";
import * as C from './style.js'
import logo from '../../images/logo.png'
import nome from '../../images/nome.png'
import {Link} from "react-router-dom"

const Header = () => {
    
    return (
        < div className='header'>
            <div className="logos">
            <C.LogoTipo className='logo'>
            <div className="img-header">
                <img src={logo} alt="logo"/>
                </div>
                <div className="title">
                   <img src={nome} alt="nome"/>
                </div>
            </C.LogoTipo>
            </div>
            <div className='nav'>
                <Link to = {"/enter"}>
                     <button>Entrar</button>
                </Link>
            </div>
        </div>
    );

};


export default Header;
