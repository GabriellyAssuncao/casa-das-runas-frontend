import { GlobalStyle } from "./styles/global";
import Header from "./components/header/Header";
import Login from "./components/Registration/Login";
import Register from "./components/Registration/Register";
import { Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <GlobalStyle />
      <Login/>
      <Routes>
       <Route path="Register" element={<Register/>}></Route>
       <Route path="Login" element={<Login/>}></Route>
       <Route path="header" element={<Header/>}></Route>
      </Routes>
    </>
  )
}

export default App;
