import React, {useState} from 'react'
import {Link} from "react-router-dom"


function Sidebar() {

    const [sidebarVisible, setSidebarVisible] = useState(true)

    function toggleSideBar(){
        setSidebarVisible(!sidebarVisible)
    }

    const sidebarstyle = {
        display: sidebarVisible ? 'block' : 'none',
    }


  return (
    <div className='side-wrapper'>
        <div className='button-sidebar'>
           <button onClick={toggleSideBar}>🦋</button>
        </div>
        <div className='sidebar' style={sidebarstyle}>
            <div className='links-sidebar'>
            <button onClick={toggleSideBar}>🦋</button>
             <Link to="/feiticos">
                    <p>Feiticos</p>
                </Link>
             <Link to="/itensmagicos">
                 <p>Items</p>
             </Link>
                 <Link to="/pocoes">
                     <p>Poções</p>
              </Link>
             </div>
             <div>
                <div className='sobre'>
                    <Link>
                    <p>About</p>
                    </Link>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Sidebar
