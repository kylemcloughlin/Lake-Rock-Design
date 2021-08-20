import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState, useEffect } from 'react';

import CheckoutForm from '../checkoutForm';
import OrderSummary from '../orderSummary';
import { useCookies } from 'react-cookie';
import '../../styles/checkout.css';

const stripePromise = loadStripe('pk_test_51JPZAlKUlzH2P3ixGDOz377XqBrkm4UcxsW47QT4y9wvimGufj6F36f3cvdW6RCWZi5X9NWJ3God5KJko66cIbES009vHJvM1G');



function Checkout({ cart, clearCart } ) {
  console.log('yoyooy', clearCart)
  const [customersItems, setCustomersItems] = useState()
  const [cookies, setCookie] = useCookies(['cart']);

  useEffect(() => {
    if (cart.length === 0) {
      console.log('hit')
      setCustomersItems(cookies['cart'])
    }
    console.log(cart)

  }, [customersItems])

  return (
    <div>
      <h1>Checkout</h1>
  <div className='checkout-holder'>
        <Elements stripe={stripePromise}>
        <OrderSummary customersItems={customersItems}/>
        <CheckoutForm customersItems={customersItems} clearCart={clearCart}/>
        </Elements>
      </div>
    </div>
  );
}

export default Checkout;