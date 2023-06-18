import * as C from './style.js';
import Header from '../../components/header/Header.js';
import Sidebar from '../../components/sidebar/index.js';
import ItemsList from '../../components/itemsList/index.js';
import FilterBar from '../../components/filterBar/index.js';


const Pocoes = () =>{
  return (
    <>
      <Header />
      <Sidebar />
        <C.Content>
          <C.ItemsDisplay>
            <FilterBar></FilterBar>
            <ItemsList></ItemsList>
          </C.ItemsDisplay>
          <C.Filter>
            Texto
          </C.Filter>
        </C.Content>
    </>
  )
}

export default Pocoes;
