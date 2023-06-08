import React from 'react'
import "./Landing.css"
import Footer from './footer'

import { Link } from "react-router-dom"
import Products from './Products'
import AppHeader from './Header'
export default function Landing() {
  return (
    <div>
    <div  style={{backgroundImage:'url(../landing.webp)',height:'30rem',width:"100%",opacity:"95%"}}>
      
            <div className='navlink'>
  <AppHeader/>
      </div>
  <div className='Header'>
  <h1>DARK AND DELICIOUS</h1></div>
  <br/>
  </div>
  <div className='description' >
 <p>Welcome to the world of chocolate</p>
 </div>
 <div className='desc'><p>Curated with precision, each praline is a true work of art. Delicate in shape and bold in flavour - they make the perfect gift, shared delight or after-dinner treat.</p></div>
  <br/>
  <br/>
 <div className='dispalypro'>
  <Products/>
 </div>
 <div><Footer/></div>
  </div>
  )
}