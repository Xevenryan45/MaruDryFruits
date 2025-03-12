import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import ShopByCatergory from './components/ShopByCatergory'
import FeaturedProducts from './components/FeaturedProducts'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Hero />
      <ShopByCatergory />
      <FeaturedProducts />
    </BrowserRouter>
      
    </>
  )
}

export default App
