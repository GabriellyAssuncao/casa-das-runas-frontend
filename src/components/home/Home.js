import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'

function Home() {
  return (
    <div>
        <Header/>
        <div>
            <h1>Testing</h1>
            <Link to={'Login'}>Testando</Link>
        </div>
    </div>
  )
}

export default Home