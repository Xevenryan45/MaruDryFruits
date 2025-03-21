import React from 'react'
import Hero from '../components/Hero'
import ShopByCatergory from '../components/ShopByCatergory'
import FeaturedProducts from '../components/FeaturedProducts'
import { Cart2 } from 'react-bootstrap-icons'
import FestivalPacks from '../components/FestivalPacks'
import CustomerReviews from "../components/CustomerReviews"
import Newsletter from '../components/NewsLetter'

export default function Homee() {
  return (
    <>
    <Hero />
    <ShopByCatergory />
    <FeaturedProducts />
    <FestivalPacks />
    <CustomerReviews />
    <Newsletter />

    
    </>
  )
}
