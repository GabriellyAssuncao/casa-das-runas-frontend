import React, {useState} from 'react'
import logo from "../../img/logo.png"
import mask from "../../img/Mask group.png"

function Register() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {

    e.preventDefault();

  }

  return (
    <div className='registration'>
      <form onSubmit={handleRegister}>
        <div className="logos">
              <img src={logo}></img>
              <span><img src={mask}></img></span>
        </div>
        <div className="bx">
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
          <button type='submit'>Criar Conta</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register