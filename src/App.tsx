import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footeer from "./Components/Footeer"

function App() {


  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footeer />
      </div>
    </>
  )
}

export default App
