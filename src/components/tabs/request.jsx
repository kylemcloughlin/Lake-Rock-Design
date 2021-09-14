import '../../styles/request.css';
import check from '../../checkmark.png';
import React, { useState, useEffect } from 'react';


function Request() {
  const [sent,setSent] = useState(false)
  const [customerEmail, setCustomerEmail] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault();
    let {email , number ,body } = e.target;
    setCustomerEmail(email.value)
    // const response = await fetch('http://localhost:3001/request_quote_email', {
      const response = await fetch('https://fathomless-lake-40918.herokuapp.com//request_quote_email', {      
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       email: email.value,
       number: number.value,
       body: body.value

      })
    });
    const content = await response;
    if (content.status === 200) {
        setSent(true)
    }
    console.log(content.status)

}



  if (sent === true ) {
    return (
      <div className='request-email-holder' >
        <div className='request-email-sent'>
        <h3>Email was Succcessfully sent</h3>
          <img src={check}/>
        <h4><i>A response will be sent to email: {customerEmail}</i></h4>
        </div>
      </div>
    )
  }

  return (
    <div className='request-email-holder' >
   <h1>Request Quote</h1>   
      <form className='request-form' onSubmit={onSubmit}>
    <label className='request-label'>Customers Email:</label>
        <br />
        <input placeholder='Your Email Here' className="request-email-input" name='email' type='email' required='true'/>
        <br />
        <label className='request-label'>Phone Number:</label>
        <br />
        <input placeholder='Your Phone Number Here' className="request-email-input" name='number' required='true' />
        <br />       
        <label>Inquiry:</label>
        <br/>
        <textarea placeholder='Your Inquiry Here' className="request-email-body-input" name='body' required='true'/>
        <br />
        <button type='submit' className='request-email-button'>Send Request</button>
    </form>

    </div>)
}

export default Request