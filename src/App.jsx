import Navbar from './layouts/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/AboutUs'
import Homee from './pages/Homee'
import Footer from './layouts/Footer'
import Disclaimer from './components/Disclaimer'
import ContactUs from './pages/ContactUs'
import Shop from './pages/Shop'

function App() {
  

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
