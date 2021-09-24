import '../../styles/contact.css';
import photo from '../../test-img-one.jpeg';
const Contact = () => {
  const handleTelly = () => {
 
    window.location.href = 'tel:4165095458';
  }

  const handleEmail = () => {
    var link = "alex@lakerockdesign.com"
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
      <span> or contact us by email at <i className='email-btn' onClick={handleEmail}>alex@lakerockdesign.com</i></span>
    </div>
    </div>
      <img src='https://lh3.googleusercontent.com/pw/AM-JKLVD3JdECL2IxYZyf5sIhcZRzkjqUFIrfp7aV4KhuUTjGgaLmNGn4HgxOmiCXky4vkoMCY3aGccbj8bAwGaPtUG0A-weWjrml5JyJJ84v7laRKifFr6XYX7WGPeWx2NzSrwR04ulfwwUAa-6dJWQtq4w=w764-h789-no?authuser=0' className='contact-photo' />
    </div>

  );
}

export default Contact;