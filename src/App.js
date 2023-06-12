import { GlobalStyle } from "./styles/global";
import Header from "./components/header/Header";
import Login from "./components/Registration/Login";
import Register from "./components/Registration/Register";
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
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
