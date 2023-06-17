import * as C from './style.js';
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div>
      <Link to={"/pocoes"}>
        <C.Link>Poções</C.Link>
      </Link>
      <Link to={"/itensmagicos"}>
        <C.Link>Itens mágicos</C.Link>
      </Link>
    </div>
  )
}

export default Sidebar;
