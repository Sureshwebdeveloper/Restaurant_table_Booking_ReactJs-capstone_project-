import React from 'react'
import Footer from './Footer'
import mobilemenu from "../images/mobile-menu.png";
import desktopmenu from "../images/desktopmenu.png";
import "../stylesheets/menuitems.css"

const Menu = () => {
  return (
    <div>
      <div className="menu_items ">
        <img src={desktopmenu} alt="" className='desktop-menuitems'/>
        <img src={mobilemenu} alt="" className='mobile-menuitems'/>
      </div>
      <Footer/>
    </div>
  )
}

export default Menu