import * as C from './style.js';
import Header from '../../components/header/Header.js';
import Sidebar from '../../components/sidebar/index.js';
import ItemsList from '../../components/itemsList/index.js';
import FilterBar from '../../components/filterBar/index.js';
import FilterSide from '../../components/filterSide/index.js';


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
          <FilterSide />
        </C.Content>
    </>
  )
}

export default Pocoes;
