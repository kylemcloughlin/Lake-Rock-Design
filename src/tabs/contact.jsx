import '../styles/contact.css';
import {Helmet} from 'react-helmet';
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
      <Helmet>
        <title>Lake Rock Design - Landscaping, Garden Centre, Rock Gardens, Apsley Ontario</title>
        <meta name="description" content="Located in Apsley, Ontario, Lake Rock Design offers professional landscape design and construction along with a complete line of landscaping products, plants, and a fast delivery service." />
        <meta name="keywords" content="Landscaping, Landscaping Material,Garden Centre, Rock Gardens, Apsley Ontario" />
      </Helmet>

      <div className='contact-body'>
        <h1>Contact Lake Rock Design</h1>
        <div className='contact-body-main'>

          <p>We are here to help! Don’t hesitate to call for advice, more information, or pricing on our professional-grade landscape products. Our experienced staff is available to provide recommendations, guide you to find the right materials for the job, or even connect you with a contractor if needed!</p>
        </div>
        <div>
          <button onClick={handleTelly} className='call-button'>CALL TODAY</button>
          <span> or contact us by email at <i className='email-btn' onClick={handleEmail}>alex@lakerockdesign.com</i></span>
        </div>
      </div>
      <img src='https://lh3.googleusercontent.com/pw/AM-JKLVD3JdECL2IxYZyf5sIhcZRzkjqUFIrfp7aV4KhuUTjGgaLmNGn4HgxOmiCXky4vkoMCY3aGccbj8bAwGaPtUG0A-weWjrml5JyJJ84v7laRKifFr6XYX7WGPeWx2NzSrwR04ulfwwUAa-6dJWQtq4w=w764-h789-no?authuser=0' className='contact-photo' alt=''/>
    </div>

  );
}

export default Contact;