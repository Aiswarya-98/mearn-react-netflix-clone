import { Route, Router, Routes } from "react-router-dom"
import "./App.css"
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Row from "./Components/Row"
import Home from "./Components/Home/Home"
import Main from "./Components/Main/Main"
import requests from "./requests"

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/main" element={<Main/>} />
      </Routes>

  
    </div>
  )
}

export default App
