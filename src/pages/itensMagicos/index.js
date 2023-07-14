import Header from '../../components/header/Header.js';
import Sidebar from '../../components/Sidebar.js';
import * as C from './style.js'
import ItemsList from '../../components/itemsList/index.js';
import FilterBar from '../../components/filterBar/index.js';
import FilterSide from '../../components/filterSide/index.js';

const ItensMagicos = () =>{
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

export default ItensMagicos;
