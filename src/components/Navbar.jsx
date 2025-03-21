import React from 'react'
import {  ArrowDown, ArrowDownCircle, ArrowDownShort, BoxArrowInRight, CaretDown, Cart2, FileArrowDown, FileEarmarkArrowDown, Heart, List, Person, Search, Sun } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import  '../App.css'
import { useState } from 'react';


export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
  return (
    <div className='navbar-container'>
        <div className="navbar-wrapper">
            <div className="navbar">
                <div className="navbarLinks">
                    <div className="mdf-logo">
                        <img src='https://res.cloudinary.com/djb0v8sck/image/upload/v1741611427/logo_njngoa.png' className='webImage'/>
                    </div>

                    <div className="mdf-search">
                        <ul>
                            <li><Link to='/' className='hover tablet' >Home</Link></li>
                            <li><Link to='/shop' className='hover tablet' >Shop</Link></li>
                            <li><Link to='/about' className='hover tablet'>About Us</Link></li>
                            <li><Link to='/contact' className='hover tablet'>Contact Us</Link></li>
                            {/* <li className='dropdown tablet'> 
                                <Link to='/festival'>Gift Packs  <span className='arrowDown'><CaretDown /> </span> </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/holiday-special">Holiday Special</Link></li>
                                    <li><Link to="/fruit-nut-mix">Fruit & Nut Mix</Link></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>

                    <div className={showMenu ? "mdf-links active" : "mdf-links"}>
                        <ul>
                            {/* <li> <input className='deSearch mobile' type="text" placeholder='Search Products... ' /> </li>
                            <li> <Sun className='light' /> </li> */}
                            <li> <Link to="/login" className='login mobile' > <span> <BoxArrowInRight />  </span> Login</Link> </li>
                            <li> <Link to='/cart' > <Cart2 className='logo' /> </Link></li>
                            <li > 
                                <List className='menu' onClick={toggleMenu}/>
                                <ul className='right'>
                                    <li className='un' ><Link to='/' >Home</Link></li>
                                    <li className='un'><Link to='/shop' >Shop</Link></li>
                                    <li className='un'><Link to='/about' >About Us</Link></li>
                                    <li className='un'><Link to='/contact' >Contact Us</Link></li>
                                    {/* <li className='un'><Link to='/festival' >Gift Packs </Link></li> */}
                                    <li className='un'> <button onClick={() => setShowMenu(false)}>Cancel</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="promo-info">
                    <marquee behavior="" direction="">
                        <p>
                            <span className='span1'> || Dry Fruits for saving || </span>
                            <span className='span1'>🤗Get 20% off on all orders🤗</span>
                            <span className='span2'>Free shipping on all orders</span>
                            <span className='span3'> 🎆✨Biggest sale of the year:Save Extra 81%</span>
                            <span className='span3'> 🌙 Ramadam Special Deal: 10% off 🌙</span>
                            <span className='span3'> 😋 10% Discounts on goods above $1000 😋</span>
                        </p>
                    </marquee>
                </div>
            </div>
        </div>
    </div>
  )
}
