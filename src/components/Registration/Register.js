import React, {useState} from 'react'
import logo from "../../images/logo.png"
import mask from "../../images/Mask group.png"
import {Link} from "react-router-dom"


function Register() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("")

  const handleRegister = (e) => {

    e.preventDefault();

  }

  return (
   <div className='rg-wrapper'>
    <div className='registration'>
      <form onSubmit={handleRegister}>
        <div className="logos">
              <img src={logo}></img>
              <span><img src={mask}></img></span>
        </div>
          <h1 style={{ margin: '0'}}>Criar sua Conta:</h1>
          <label>Usuário:</label>
        <div className="inputs-rgs">
          <input
          type='text'
            placeholder='Enter Your Username'
            id='user'
            value={user}
            onChange={e => setUser(e.target.value)}
          />
            <label>Email:</label>
          <input
            type='text'
            placeholder='Enter Your Email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label>Senha:</label>
          <input
          type='password'
          id='password'
          placeholder='Enter Your Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          />
          <label>Confirme sua senha:</label>
          <input
          type='password'
          placeholder='Confirm Your Password'
          id='confirmPassword'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          />
          <Link to={"/enter"} >
            <button type='submit'>Criar Conta</button>
          </Link>
          </div>
      </form>
    </div>
    <div className='rg-img'>
      </div>
    </div>
  )
}

export default Register