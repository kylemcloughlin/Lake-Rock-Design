import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState, useEffect } from 'react';

import CheckoutForm from '../checkoutForm';
import OrderSummary from '../orderSummary';
import { useCookies } from 'react-cookie';
import '../../styles/checkout.css';

const stripePromise = loadStripe('pk_test_51JPZAlKUlzH2P3ixGDOz377XqBrkm4UcxsW47QT4y9wvimGufj6F36f3cvdW6RCWZi5X9NWJ3God5KJko66cIbES009vHJvM1G');



function Checkout({ cart, clearCart } ) {
  // console.log('yoyooy', clearCart)
  const [customersItems, setCustomersItems] = useState()
  const [complete, setComplete] = useState(false)

  const [cookies, setCookie] = useCookies(['cart']);
  console.log(cookies)

  useEffect(() => {
      setCustomersItems(cookies['cart'])
 

  }, [customersItems])

  const handlePartOne = () => {
    console.log('eheheheh')
    setComplete(true)
  }

  const updateCart = (prdct, kase) => {
    if( kase === 'remove') {
      let help = customersItems
      help.forEach((item, index) => {
        if (item.name === prdct.name) {
          console.log('hit', index)
          help.splice(index, 1)
          setCookie('cart', help, { path: '/' });
           setCustomersItems(help)
        alert("removed from cart!");
        }
})
 } else if(kase === 'add') {
   let help = customersItems
   help.forEach((item, index) => {
      console.log(item.name, prdct.name)
    if (item.name === prdct.name) {
       item.value = Number(item.value) + 1
       console.log('!!!')
       console.log(item.value)
       console.log('!!!!')

      }
    })
    
    console.log(prdct)
      setCookie('cart', help, { path: '/' });
      setCustomersItems(help)
      alert("added to cart!");
  
  } else {
      let help = customersItems
      help.forEach((item, index) => {
        console.log(item.name, prdct.name)
        if (item.name === prdct.name) {
          item.value = Number(item.value) - 1
          console.log('!!!')
          console.log(item.value)
          console.log('!!!!')

        }
      })

      console.log(prdct)
      setCookie('cart', help, { path: '/' });
      setCustomersItems(help)
      alert("subtracted from cart!");
  }

}

  if (complete) {
    return (
      <div>
        <h1>Checkout Complete</h1>
      </div>
    )
  }
  return (
    
   
    <div>
      <h1>Checkout</h1>
      <div className='checkout-holder'>
        <Elements stripe={stripePromise}>
        <OrderSummary customersItems={customersItems} updateCart={updateCart}/>
        <CheckoutForm customersItems={customersItems} clearCart={clearCart} handleFinish={handlePartOne}/>
        </Elements>
      </div>
    </div>
  );
}

export default Checkout;