import * as C from './style.js'
import logo from '../../img/logo.png'
import nome from '../../img/nome.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <C.HeaderStyle>
            <C.LogoTipo>
                <img src={logo} alt="logo"/>
                <img src={nome} alt="nome"/>
            </C.LogoTipo>

            <C.Navigation>
                <li><a href='#'>Poções</a></li>
                <li><a href='#'>Feitiços</a></li>
                <li><Link to='Login'><a>Conta</a></Link></li>
            </C.Navigation>
        </C.HeaderStyle>
    );
}

export default Header;
