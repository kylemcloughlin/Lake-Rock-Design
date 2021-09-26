import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState, useEffect } from 'react';

import CheckoutForm from '../checkoutForm';
import OrderSummary from '../orderSummary';
import { useCookies } from 'react-cookie';
import '../../styles/checkout.css';
import Modal from '../modal.jsx';
import check from '../../checkmark.png';
const stripePromise = loadStripe('pk_test_51JPZAlKUlzH2P3ixGDOz377XqBrkm4UcxsW47QT4y9wvimGufj6F36f3cvdW6RCWZi5X9NWJ3God5KJko66cIbES009vHJvM1G');



function Checkout({ cart, clearCart } ) {
  const [customersItems, setCustomersItems] = useState()
  const [complete, setComplete] = useState(false);
  const [swtch,setSwtch] = useState(false);
  const [payment, setPayment] = useState(false);
  const [mes, setMes] = useState('')
  const [cookies, setCookie] = useCookies(['cart']);
  console.log(cookies)

  useEffect(() => {
      setCustomersItems(cookies['cart'])
 

  }, [customersItems, cookies])

  const handlePartOne = (x) => {
    console.log('eheheheh')
    setMes(`${x}`)
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
        // alert("removed from cart!");
          let modal = document.getElementById("myModal");
          modal.style.display = "block";
          setTimeout(function () { modal.style.display = "none"; }, 2000);
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
      // alert("added to cart!");
      let modal = document.getElementById("myModal");
      modal.style.display = "block";
      setTimeout(function () { modal.style.display = "none"; }, 2000);
  
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
      // alert("subtracted from cart!");
      let modal = document.getElementById("myModal");
      modal.style.display = "block";
      setTimeout(function () { modal.style.display = "none"; }, 2000);
  }

}

  const handleSwitch = () => {
      setSwtch(true)
  }
  const handleChangeInPayment = () => {
    setPayment(!payment);
  }

  if (complete) {
    return (
      <div className='request-email-holder'>
        <div className='request-email-sent'>
        <h1>Checkout Complete</h1>
        <img src={check} alt=''/>
          <h4><i>{mes}</i></h4>
        </div>
      </div>
    )
  }
  return (
    
   
    <div>
      <Modal/>
      <h1 className='chck-title'>Checkout</h1>
      <div className='checkout-holder'>
        <Elements stripe={stripePromise}>
          <OrderSummary customersItems={customersItems} updateCart={updateCart} swtch={swtch} handleChangeInPayment={handleChangeInPayment}/>
        <CheckoutForm customersItems={customersItems} clearCart={clearCart} handleFinish={handlePartOne} handleSwitch={handleSwitch} payment={payment}/>
        </Elements>
      </div>
    </div>
  );
}

export default Checkout;