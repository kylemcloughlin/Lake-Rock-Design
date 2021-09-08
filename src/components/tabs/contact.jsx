import '../../styles/contact.css';
import photo from '../../test-img-one.jpeg';
const Contact = () => {
  const handleTelly = () => {
 
    window.location.href = 'tel:4165095458';
  }

  const handleEmail = () => {
    var link = "mailto:me@example.com"
      + "?cc="
      + "&subject=" + encodeURIComponent("Contact Inquiry")
      ;

    window.location.href = link
  }
  return (
    <div className='contact-holder'>
     
  
        <div className='contact-body'>
      <h1>Contact Lake Rock Design</h1>
        <div className='contact-body-main'>

        <p>We are here to help! Don’t hesitate to call for advice, more information, or pricing on our professional-grade landscape products. Our experienced staff is available to provide recommendations, guide you to find the right materials for the job, or even connect you with a contractor if needed!</p>
          {/* <div className='contact-body-main-list'>
      <h4> Contact us anytime for: </h4>
            <ul className='contact-list'>
        <li>product delivery</li>
        <li>landscaping inquiries</li>
        <li>new garden design</li>
        <li>tree and shrub sales</li>
      </ul>
      </div> */}
      </div>
    <div>
          <button onClick={handleTelly} className='call-button'>CALL TODAY</button>
      <span> or contact us by email at <i className='email-btn' onClick={handleEmail}>email@email.com</i></span>
    </div>
    </div>
      <img src={photo} className='contact-photo' />
    </div>

  );
}

export default Contact;