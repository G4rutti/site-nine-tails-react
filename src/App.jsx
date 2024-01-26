import {BrowserRouter, Routes, Route} from 'react-router-dom'
import react from 'react'

// Components
import NavBar from "./components/NavBar/NavBar.jsx"
import Footer from "./components/Footer/Footer.jsx"

// Pages
const Home = react.lazy(() => import('./pages/Home/Home.jsx'))
const OurRobots = react.lazy(() => import('./pages/OurRobot/OurRobot.jsx'))
const Sobre = react.lazy(() => import('./pages/Sobre/Sobre.jsx'))
// import Home from './pages/Home/Home.jsx'
// import OurRobots from './pages/OurRobot/OurRobot.jsx'
// import Sobre from './pages/Sobre/Sobre.jsx'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/acoes" element=""/>
          <Route path="/nossosRobos" element={<OurRobots />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
