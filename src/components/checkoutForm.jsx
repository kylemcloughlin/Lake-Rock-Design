import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from 'react';
import '../styles/checkout.css';
import ErrorModal from './errorModal.jsx';


function CheckoutForm({ customersItems, clearCart, handleFinish, handleSwitch, payment }) {
  let [orders, SetOrders] = useState([]);
  const [secondStep, setSecondStep] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({})
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
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
    let { first, last, company, street, unit, town, postal, prov, email } = event.target;
    if (prov.value !== 'ON') {
      console.log('error')
      setErrorMessage('We only provide shipping within Ontario.');
      let error = document.getElementById("myErrorModal");
      error.style.display = "block";
      // setTimeout(function () { error.style.display = "none"; }, 1500);


    } else {
      setShippingInfo({
        first: first.value,
        last: last.value,
        company: company.name,
        street: street.value,
        unit: unit.value,
        town: town.value,
        postal: postal.value,
        province: prov.value,
        email: email.value
      })
      handleSwitch(true)
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
    first.value = shippingInfo.first;
    last.value = shippingInfo.last;
    company.value = shippingInfo.company;
    street.value = shippingInfo.street;
    unit.value = shippingInfo.unit;
    town.value = shippingInfo.town;
    postal.value = shippingInfo.postal;
  }



  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(false)
    let { first, last, company, street, unit, town, postal, prov } = event.target;
    let output = {
      first: first.value,
      last: last.value,
      company: company.value,
      street: street.value,
      unit: unit.value,
      town: town.value,
      postal: postal.value,
      prov: prov.value
    }
    console.log(output)
    if (!stripe || !elements) {
      setLoading(true)
      return;
    }
    console.log('heheheh', customersItems)

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: shippingInfo.email,

      },
    });
    if (result.error) {
      console.log(result.error.message); ///ADDD ERRROR HANDLEING HERE???
      setLoading(true)

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
        handleFinish(`A receipt will be sent to email: ${shippingInfo.email}`)
        clearCart();
      } else {
        setLoading(false)
      }

    }

  }

  const handleRequest = async (e) => {
    setLoading(true)
    e.preventDefault();
    let element = document.getElementById('request-btn');
    element.style.background = '#E9868C';
    element.innerHTML= "sending...";
    const response = await fetch(`https://fathomless-lake-40918.herokuapp.com/inquiry_email`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        shipping: shippingInfo,
        cart: customersItems

      })
    });
    const content = await response;
    if (content.status === 200) {
      handleFinish(`We successfully recieved your request, A response will be sent to the email: ${shippingInfo.email}`);
      clearCart();
    } else {
      setLoading(false)
    }



  }

  if (secondStep) {
    return (
      <div>
        <div>
          {!payment ? (

            // <div className="loader-holder-checkout-request" id='ldr' ><div className="loader-request"></div></div>
            <button onClick={handleRequest} className='request-shipping-button' id='request-btn'> Request Shipping Quote</button>


          ) : (
              <div>
                <input name='checkbox' type='checkbox' onClick={handleShippingClick} />
                <label for='checkbox'>Same As Shipping</label>
                <form onSubmit={onSubmit} className='right'>
                  <h2>Billing Information</h2>
                  <h6 className='of-two'>2 of 2</h6>

                  <div className='line-one'>
                    <div for='first' className='one-label' >First Name </div>
                    <div className='one-label'>Last Name</div>
                    <div className='one-label'>Company Name</div>
                  </div>
                  <div className='line-two'>
                    <input type='text' placeholder='First Name*' name='first' className='first-name-input' id='first' required />
                    <input type='text' placeholder='Last Name*' name='last' className='last-name-input' id='last' required />
                    <input type='text' placeholder='Company Name' name='company' className='company-input' id='company' />
                  </div>


                  <div className='line-three'>
                    <div className='two-label'>Street Name</div>
                    <div className='two-label'> Unit</div>
                  </div>
                  <div className='line-four'>
                    <input type='text' placeholder='Street Name' name='street' className='street-input' id='street' />
                    <input type='text' placeholder='Apartment, Suite, Unit, etc.' name='unit' className='unit-input' id='unit' />
                  </div>

                  <div className='line-five'>
                    <div className='three-label'>City/Town</div>
                    <div className='three-label'>Postal</div>
                    <div className='three-label'>Province</div>
                  </div>
                  <div className='line-six'>
                    <input type='text' placeholder='Town/City' name='town' className='town-input' id='town' />
                    <input type='text' placeholder='Postal Code' name='postal' className='postal-input' id='postal' />
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

                  <div className='line-seven'>
                    <div className='four-label'>Credit Card</div>
                  </div>

                  <div className='line-eight'>
                    <CardElement options={cardOptions} className='stripe' />
                  </div>

                  {loading ? (
                    <button type='submit' disabled={!stripe} className='submit-button-checkout'>Submit</button>

                  ) : (<div className="loader-holder-checkout" id='ldr'><div className="loader-request"></div></div>)}

                </form>
              </div>)}
        </div>
      </div>
    )
  }
  return (
    <form onSubmit={onFirstSubmit} className='right'>
      <ErrorModal message={errorMessage} />


      <h2>Shipping Information</h2>
      <h6 className='of-two'>1 of 2</h6>
      <div>
        <div className='line-one'>
          <div for='first' className='one-label' >First Name </div>
          <div className='one-label'>Last Name</div>
          <div className='one-label'>Company Name</div>
        </div>
        <div className='line-two'>
          <input type='text' placeholder='First Name*' name='first' className='first-name-input' id='first' required />
          <input type='text' placeholder='Last Name*' name='last' className='last-name-input' required />
          <input type='text' placeholder='Company Name' name='company' className='company-input' />
        </div>


        <div className='line-three'>
          <div className='two-label'>Street Name</div>
          <div className='two-label'> Unit</div>
        </div>
        <div className='line-four'>
          <input type='text' placeholder='Street Name' name='street' className='street-input' />
          <input type='text' placeholder='Apartment, Suite, Unit, etc.' name='unit' className='unit-input' />
        </div>

        <div className='line-five'>
          <div className='three-label'>City/Town</div>
          <div className='three-label'>Postal</div>
          <div className='three-label'>Province</div>
        </div>
        <div className='line-six'>
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

        <div className='line-seven'>
          <div className='four-label'>Email</div>
        </div>

        <div className='line-eight'>
          <input type='email' placeholder='email' name='email' className='email' />
        </div>

        <button type='submit' className='submit-button-checkout' disabled={orders.length === 0 ? (true) : (false)}>Submit</button>
      </div>
    </form>
  )
}

export default CheckoutForm