import * as C from './style.js'
import logo from '../../img/logo.png'
import nome from '../../img/nome.png'

const Header = () => {
    return (
        < div className='header'>
            <C.LogoTipo className='logo'>
            <div className="img-header">
                <img src={logo} alt="logo"/>
                </div>
                <div className="title">
                   <img src={nome} alt="nome"/>
                </div>
            </C.LogoTipo>

            <C.Navigation className='nav'>
                <li><a href='#'>Poções</a></li>
                <li><a href='#'>Feitiços</a></li>
                <li><a href='#'>Conta</a></li>
            </C.Navigation>
        </div>
    );
}

export default Header;
