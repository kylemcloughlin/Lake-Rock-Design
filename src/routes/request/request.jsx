import './request.css';
import check from '../../photos/checkmark.png';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';


function Request() {
  const [sent,setSent] = useState(false)
  const [customerEmail, setCustomerEmail] = useState('')
  const [loading, setLoading] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(false)
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
      // fade('bod')
        setSent(true)
    }


}



  if (sent === true ) {
    return (
      <div className='request-email-holder' >
        <div className='request-email-sent'>
        <h3>Email was Succcessfully sent</h3>
          <img src={check} alt=''/>
        <h4><i>A response will be sent to email: {customerEmail}</i></h4>
        </div>
      </div>
    )
  }

  return (
    <div className='request-email-holder' id='bod'>
    <Helmet>
        <title>Request a Quote - Landscaping, Garden Centre, Rock Gardens, Apsley Ontario</title>
        <meta name="description" content='At Lake Rock Design, we carry only the highest-quality, professional-grade products. From big jobs to small projects, we have what you need for landscape designs of all sizes. Whether you are a homeowner, DIYer, Property Manager, General Contractor, Landscape Architect, or Lawn Maintenance company, we stock the materials you need to create inspiring outdoor spaces' />
        <meta name="keywords" content="Landscaping, Landscaping Material,Garden Centre, Rock Gardens, Apsley Ontario" />
    </Helmet>
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

        {loading ? (
          <button type='submit' className='request-email-button'>Send Request</button>
         
        ) : (<div className="loader-holder-request" id='ldr'><div className="loader-request"></div></div>)}
    </form>


    </div>)
}

export default Request