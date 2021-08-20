import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from 'react';
import '../styles/checkout.css';

function CheckoutForm ( {customersItems, clearCart}) {
  const [cookies, setCookie] = useCookies(['cart']);
  const [complete, setComplete] = useState(false)
  
  useEffect(() => {
    console.log(customersItems)
  
  }, [customersItems])


  const cardOptions = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#1890ff",
        color: "rgba(0, 0, 0, 0.65)",
        fontWeight: 500,
        fontFamily: "Segoe UI, Roboto, Open Sans, , sans-serif",
        fontSize: "15px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#fce883" },
        "::placeholder": { color: "#bfbfbf" }
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "red"
      }
    }
  };

  const stripe = useStripe();
  const elements = useElements();
  const onSubmit = async (event) => {
    event.preventDefault()
    let {  email } = event.target
    console.log(email.value)

    // let name = [first.value, last.value]
    // name = name.join(" ")
    if (!stripe || !elements) {
      // setPending(false)

      return;
    }



    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        // email: email.value,

      },
    });


    if (result.error) {
      // setPending(false)
      console.log(result.error.message); ///ADDD ERRROR HANDLEING HERE???


    } else {
      const rawResponse = await fetch('https://fathomless-lake-40918.herokuapp.com/customers', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        email: email.value,
        code: 'price_1JQCK0KUlzH2P3ixq8p1wRFe',
        payment_method: result.paymentMethod.id,
      })
      });
      const content = await rawResponse.json();

      console.log(content);
      console.log(content.payment_status);
    

      if(content.payment_status === 'succeeded'){
          setComplete(true)
          clearCart();
      }
    
    }
      
  }
  if(complete === true ) {
    return (
      <div>
        <h1>payment successful</h1>
      </div>
    )
  }
  return (
    <form onSubmit={onSubmit} className='right'>
    <h2>billing information</h2>
      <input type='email' placeholder='email' name='email' />
      <CardElement options={cardOptions} />
      <button type='submit' disabled={!stripe}>Submit</button>
    </form>
  )
}

export default CheckoutForm