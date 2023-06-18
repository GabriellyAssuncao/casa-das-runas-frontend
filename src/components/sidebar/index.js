import * as C from './style.js';
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div>
      <C.StyleBar>
        <C.Link>
          <Link to={"/pocoes"}>
            Poções
          </Link>
        </C.Link>
        <C.Link>
          <Link to={"/itensmagicos"}>
            Itens Mágicos
          </Link>
        </C.Link>
        <C.Link>
          <Link to={"/feiticos"}>
            Feitiços
          </Link>
        </C.Link>
      </C.StyleBar>

    </div>
  )
}

export default Sidebar;
