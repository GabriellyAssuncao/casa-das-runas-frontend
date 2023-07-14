import { GlobalStyle } from "./styles/global";
import Login from "./components/Registration/Login";
import Register from "./components/Registration/Register";
import Feiticos from "./components/Feiticos";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Pocoes from "./pages/pocoes";
import ItensMagicos from "./pages/itensMagicos";

function App() {

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/enter" element={<Login/>}/>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/pocoes" element={<Pocoes/>}></Route>
          <Route path="/itensmagicos" element={<ItensMagicos/>}></Route>
          <Route path="/feiticos" element={<Feiticos/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
