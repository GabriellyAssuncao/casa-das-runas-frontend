import { GlobalStyle } from "./styles/global";
import Header from "./components/header";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Login/>
      <Routes>
       <Route path="Register" element={<Register/>}></Route>
      </Routes>
    </>
  )
}

export default App;
