import Navbar from './layouts/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/AboutUs'
import Homee from './pages/Homee'
import Footer from './layouts/Footer'
import Disclaimer from './components/Disclaimer'
import ContactUs from './pages/ContactUs'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import { useState } from 'react'
import Login from './pages/Login'
import Registration from './pages/Registration'

function App() {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Homee />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/aboutUs' element={<AboutUs />}/>
          <Route path='/contactUs' element={<ContactUs />}/>
          <Route path='/disclaimer' element={<Disclaimer />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<div className="auth-page">
      {activeTab === "login" ? <Login onSwitch={setActiveTab} /> : <Registration onSwitch={setActiveTab} />}
    </div>}/>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
