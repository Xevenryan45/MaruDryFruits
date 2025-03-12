import React from 'react';
import "../App.css"
import { Twitter, Facebook, Instagram, GeoAlt, Telephone, Envelope }from 'react-bootstrap-icons';

export default function Footer() {
  return (
    <div className='news'>
      <div className="newletter">
        <div className="newsLetterWrapper">
          <h1>Subscribe</h1>
          <h3>Subscribe to our Newsletter</h3>

          <div className="emailBox">
            <input type="email" placeholder='Enter email address' className="userText" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footerNavigate">
        <div className="footerNavigateWrapper">
          <div className="boutiqueSocial">
            <h5>MADAM BOUTIQUE</h5>

            <div className="social-icons">
              <Twitter />
              <Facebook />
              <Instagram />
            </div>
          </div>

          <div className="boutiqueLinks">
            <h5>MENU</h5>
            <ul>
              <li> <a href="/">Shop</a> </li>
              <li> <a href="/">About</a> </li>
              <li> <a href="/">Blog</a> </li>
              <li> <a href="/">Contact</a> </li>
            </ul>
          </div>

          <div className="boutiqueAssist">
            <h5>HELP</h5>
            <ul>
              <li> <a href="/">Shipping Information</a> </li>
              <li> <a href="/">Returns & Exchange</a> </li>
              <li> <a href="/">Terms & Conditions</a> </li>
              <li> <a href="/">Privacy Policy</a> </li>
            </ul>
          </div>

          <div className="enquires">
            <h5>Have a Questions?</h5>
            <ul>
              <li><GeoAlt /> <span>	203 Fake St. Mountain View, California, USA</span></li>
              <li><Telephone /> <span>	+234 9033 457 8765</span></li>
              <li><Envelope /> <span>	mail.icon@gmail.com</span></li>
            </ul>
          </div>
        </div>

        <div className="warning">
          <p>Copyright ©2024 All rights reserved | This made with 💀 by Diablo Vlophir</p>
        </div>
      </div>

      
    </div>
  )
}