import './App.css'
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Services from "./pages/Services"
import SignUp from "./pages/SignUp"
import Footer from './components/Footer/Footer'

function App() {
  return ( 
    <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/products"  element={<Products/>}/>
      <Route path="/sign-up"  element={<SignUp/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App;
