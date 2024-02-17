import { Route,  Routes } from "react-router-dom"
import "./App.css"
import Home from "./Components/Home/Home"
import Main from "./Components/Main/Main"

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/mearn-react-netflix-clone" element={ <Home />}/>
        <Route path="/main" element={<Main/>} />
      </Routes>

  
    </div>
  )
}

export default App
