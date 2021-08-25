import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from 'react';
import '../styles/checkout.css';
import OrderSummary from "./orderSummary";

function CheckoutForm({ customersItems, clearCart, handleFinish }) {
  let [orders, SetOrders] = useState([]);
  const [complete, setComplete] = useState(false);
  const [secondStep, setSecondStep] = useState(false);
  const [shippingInfo,setShippingInfo] = useState({})
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    console.log(customersItems)
    if (customersItems) {

      SetOrders(customersItems)

    }
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
  const onFirstSubmit = (event) => {
    event.preventDefault()
    let { first, last, company, street, unit, town, postal, prov } = event.target;
    if(prov.value != 'ON') {
      console.log('error')
    } else {      
      setShippingInfo({
        first: first.value,
        last: last.value,
        company: company.name,
        street: street.value,
        unit: unit.value,
        town: town.value,
        postal: postal.value,
        province: prov.value
      })
      setSecondStep(true)
    }
  }

  const handleShippingClick = (e) => {
    let first = document.getElementById('first');
    let last = document.getElementById('last');
    let company = document.getElementById('company');
    let street = document.getElementById('street');
    let unit = document.getElementById('unit');
    let town = document.getElementById('town');
    let postal = document.getElementById('postal');
      first.value =  shippingInfo.first;
      last.value = shippingInfo.last;
      company.value = shippingInfo.company;
      street.value = shippingInfo.street;
      unit.value = shippingInfo.unit;
      town.value = shippingInfo.town;
      postal.value = shippingInfo.postal;
  }



  const onSubmit = async (event) => {
    event.preventDefault()
    let { first, last, company, street, unit, town, postal, prov, email } = event.target;
    let output =  {
      first: first.value,
      last: last.value,
      company: company.value,
      street: street.value,
      unit: unit.value,
      town: town.value,
      postal: postal.value,
      prov: prov.value,
      email: email.value
    }
    console.log(output)
    if (!stripe || !elements) {
      return;
    }
      console.log('heheheh', customersItems)

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: email.value,

      },
    });
    if (result.error) {
      console.log(result.error.message); ///ADDD ERRROR HANDLEING HERE???


    } else {
      const rawResponse = await fetch('https://fathomless-lake-40918.herokuapp.com/customers', {
      // const rawResponse = await fetch('http://localhost:3001/customers', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            shipping: shippingInfo,
            billing: output,
            cart: customersItems

        })
      });
      const content = await rawResponse.json();
      if (content.payment_status === 'succeeded') {
        // setComplete(true)
        handleFinish()
        clearCart();
      }

    }

  }
  if (secondStep) {
    return (
      <div>
        <input name='checkbox' type='checkbox' onClick={handleShippingClick}/>
        <label for='checkbox'>Same As Shipping</label>
      <form onSubmit={onSubmit} className='right'>
        <h2>Billing Information Part 2 of 2</h2>
        <div>
          <div className='line-one'>
            <input type='text' placeholder='First Name*' name='first' className='first-name-input'id='first' required />
            <input type='text' placeholder='Last Name*' name='last' className='last-name-input' id='last' required />
            <input type='text' placeholder='Company Name' name='company' className='company-input' id='company'/>
          </div>
          <div className='line-two'>
            <input type='text' placeholder='Street Name' name='street' className='street-input' id='street'/>
            <input type='text' placeholder='Apartment, Suite, Unit, etc.' name='unit' className='unit-input' id='unit'/>
          </div>
          <div className='line-three'>
            <input type='text' placeholder='Town/City' name='town' className='town-input' id='town'/>
            <input type='text' placeholder='Postal Code' name='postal' className='postal-input' id='postal'/>
              <select name="prov" className='prov-select' id='prov'>
              <option value="">Province</option>
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NL">Newfoundland & labrador</option>
              <option value="NS">Nova Scotia</option>
              <option value="ON">Ontario</option>
              <option value="PE">Prince Edward Island</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
              <option value="NT">Northwest Territories</option>
              <option value="NU">Nunavut</option>
              <option value="YT">Yukon</option>
            </select>
          </div>
        </div>
          <div className='line-four'>
          <input type='email' placeholder='email' name='email' className='email'/>
          </div>  
          <div className='line-five'>            
            <CardElement options={cardOptions} className='stripe'/>

          </div>
          <button type='submit' disabled={!stripe} className='submit-button-checkout'>Submit</button>
      </form>
        </div>
    )
  }
  return (
    <form onSubmit={onFirstSubmit} className='right'>
      <h2>Shipping Information part 1 of 2</h2>
      <div>
        <div className='line-one'>
          <input type='text' placeholder='First Name*' name='first' className='first-name-input' required />
          <input type='text' placeholder='Last Name*' name='last' className='last-name-input' required />
          <input type='text' placeholder='Company Name' name='company' className='company-input' />
        </div>
        <div className='line-two'>
          <input type='text' placeholder='Street Name' name='street' className='street-input' />
          <input type='text' placeholder='Apartment, Suite, Unit, etc.' name='unit' className='unit-input' />
        </div>
        <div className='line-three'>
          <input type='text' placeholder='Town/City' name='town' className='town-input' />
          <input type='text' placeholder='Postal Code' name='postal' className='postal-input' />
          <select name="prov" className='prov-select'>
            <option value="">Province</option>
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland & labrador</option>
            <option value="NS">Nova Scotia</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="NT">Northwest Territories</option>
            <option value="NU">Nunavut</option>
            <option value="YT">Yukon</option>
          </select>
        </div>
  
        <button type='submit' className='submit-button-checkout' disabled={orders.length === 0 ? (true) : (false)}>Submit</button>
      </div>
    </form>
  )
}

export default CheckoutForm