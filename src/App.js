import { GlobalStyle } from "./styles/global";
import Login from "./components/Registration/Login";
import Register from "./components/Registration/Register";
import Feiticos from "./components/Feiticos";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";


function App() {

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/enter" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/feiticos" element={<Feiticos/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
