import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import '../styles/hamburger.css';
import React, { useState, useEffect } from 'react';
let buttonValues = [{ value: "Home", urlLink: '/' }, { value: "Design and Construction", urlLink: '/design-and-contstruction' }, { value: "Landscaping Supplies", urlLink: '/landscaping-supplies' }, { value: "Gallery", urlLink: '/past-work-gallery' }, { value: "Contact Us", urlLink: '/contact' }]
// , { value: "Plants and Trees", urlLink: '/plants-and-trees' }
const Hamburger = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => {
    setMenuOpen(false)
  }
  const showMenu = () => {
    setMenuOpen(true)


  }
  return (
    <div className='nav-button-bar-mobile'>
      {/* <button id='react-burger-menu-btn' className='menu-btn' onClick={showMenu}>MENU</button> */}
      <Menu width={'100%'} isOpen={menuOpen}>
        <button className='bm-cross-button'>X</button>
        {buttonValues.map((item, index) => {
          return (
            <Link to={item.urlLink} key={index}>
              <button value={index} onClick={closeMenu} className='moblie-menu-nav-button'>{item.value}</button>
            </Link>
          )
        })}
      </Menu>
    </div>
  )
}





export default Hamburger;