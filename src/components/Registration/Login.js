import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from "/Users/natejpg/Workspace/casa-das-runas-frontend/src/img/logo.png"
import mask from "/Users/natejpg/Workspace/casa-das-runas-frontend/src/img/Mask group.png"

function Login() {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault();

    }
    
  return (
        <div className='registration'>
            <form onSubmit={handleSubmit}>
            <div className='logos'>
              <img src={logo}></img>
              <span><img src={mask}></img></span>
            </div>
            <div className='bx'>
              <h1>Login</h1>
              <div className="inputs-lgn">
              <label>Usuário:</label>
              <input
              placeholder='Enter Your Username'
              type='text'
              value={user}
              onChange={e => setUser(e.target.value)}
              />
              <label>Senha:</label>
              <input
              type='password'
              placeholder='Enter Your Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <Link to={'Header'}><button type='submit'>Entrar</button></Link>
              <div className='links'>
                <p>Não possui uma conta ?</p>
                <Link to={'Register'} style={{color: "red"}}><p>Clique Aqui</p></Link>
                </div>
              </div>
            </div>
            </form>
        </div>
  )
}

export default Login