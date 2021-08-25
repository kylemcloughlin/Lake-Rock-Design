import '../styles/header.css';
import phone from './phone.png';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import shoppingCart from './shopping-cart.png'
import { Link } from 'react-router-dom';

function Header({cart, complete}) {
let [count, setCount] = useState(cart)
const [cookies, setCookie] = useCookies(['cart']);

  useEffect(() => {
    if (complete) {
      console.log('hit')
      setCount([])
    }
    if (cookies.cart != undefined) { 
      setCount(cookies['cart'])
    }

    if( cart.length > 0) {
      console.log(cart.length)
      setCount(cart)
    }

  }, [ cart, complete]);
  
  return (
    <div className="App-header">
      <Link to={``}>
        <div className="company-name">
          <h6 className="company-name-title">Lake Rock Design</h6>
        </div>
      </Link>
      <div className='company-number'>
      <div className='img-div'>
        <img className='company-number-img' src={phone}/>
      </div>
        <h6> (705)-868-3590</h6>
      </div>
      <div className='company-address'>
        {!count.length > 1 ? (
          <div className='holler'>
        <div className='address-img-div'>
          <img className='company-number-img' src={shoppingCart} />
        </div>
          <h3 className='cart'>{count.length}</h3>
        </div>) : (
        <Link to={`/checkout`}>
        <div className='holler'>
        <div className='address-img-div'>
        <img className='company-number-img' src={shoppingCart} />
        <h4 className='cart'>{count.length}</h4>
        </div>
        </div>
        </Link>    
        )}
          <h5 className='serving'>Serving North Kawartha and Beyond</h5>
        <div>
        </div>     
    </div>
    </div>
  );
}

export default Header;
