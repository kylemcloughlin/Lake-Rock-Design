import './checkout.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import CheckoutForm from '../../components/checkoutForm.jsx';
import OrderSummary from '../../components/orderSummary.jsx';

import Modal from '../../components/modal.jsx';
import check from '../../photos/checkmark.png';
import CheckoutLogic from './checkoutLogic.js';



const stripePromise = loadStripe('pk_test_51JPZAlKUlzH2P3ixGDOz377XqBrkm4UcxsW47QT4y9wvimGufj6F36f3cvdW6RCWZi5X9NWJ3God5KJko66cIbES009vHJvM1G');

function Checkout({ cart, clearCart }) {

  let { updateCart,
    handleSwitch,
    handleChangeInPayment,
    handlePartOne,
    cookies,
    payment,
    mes,
    complete,
    swtch,
    setCustomersItems,
    customersItems } = CheckoutLogic();



  useEffect(() => {
    setCustomersItems(cookies['cart'])


  }, [customersItems, cookies])

  if (complete) {
    return (
      <div className='request-email-holder'>
        <div className='request-email-sent'>
          <h1>Checkout Complete</h1>
          <img src={check} alt='' />
          <h4><i>{mes}</i></h4>
        </div>
      </div>
    )
  }
  return (


    <div>
      <Helmet>
        <title>Check Out - Landscaping, Garden Centre, Rock Gardens, Apsley Ontario</title>
        <meta name="description" content="Located in Apsley, Ontario, Lake Rock Design offers professional landscape design and construction along with a complete line of landscaping products, plants, and a fast delivery service." />
        <meta name="keywords" content="Landscaping, Landscaping Material,Garden Centre, Rock Gardens, Apsley Ontario" />
      </Helmet>
      <Modal />
      <h1 className='chck-title'>Checkout</h1>
      <div className='checkout-holder'>
        <Elements stripe={stripePromise}>
          <OrderSummary customersItems={customersItems} updateCart={updateCart} swtch={swtch} handleChangeInPayment={handleChangeInPayment} />
          <CheckoutForm customersItems={customersItems} clearCart={clearCart} handleFinish={handlePartOne} handleSwitch={handleSwitch} payment={payment} />
        </Elements>
      </div>
    </div>
  );
}

export default Checkout;