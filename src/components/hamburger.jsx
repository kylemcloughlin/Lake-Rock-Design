import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import '../styles/hamburger.css';
import React, { useState, useEffect } from 'react';
let buttonValues = [{ value: "Home", urlLink: '/' }, { value: "Design and Construction", urlLink: '/design-and-contstruction' }, { value: "Landscaping Supplies", urlLink: '/landscaping-supplies' }, { value: "Gallery", urlLink: '/past-work-gallery' }, { value: "Plants and Trees", urlLink: '/plants-and-trees' }, { value: "Contact Us", urlLink: '/contact' }]
const Hamburger = () => {
  const [isClosed, setIsClosed] = useState(false)
  const showSettings = () => {
    // event.preventDefault();
    setIsClosed(false)
  }



  return (
    <div className='nav-button-bar-mobile'>
      <button className='menu-btn'>MENU</button>
      <Menu width={'100%'}>
        <button className='bm-cross-button'>X</button>
       
        {buttonValues.map((item, index) => {
          return (
            <Link to={item.urlLink} key={index}>
              <button value={index} onClick={showSettings} className='moblie-menu-nav-button'>{item.value}</button>
            </Link>
          )
        })}
    </Menu>
    </div>
  )
}


export default Hamburger;