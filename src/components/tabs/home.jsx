import '../../styles/home.css';
import { Link } from 'react-router-dom';
import Carousel from '../carousel.jsx';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='request-holder'>
        <p className='call-to'>Our qualified team will take your project from the design stage to completion in an organized, professional and timely manner.</p>
        <Link to={'request-quote'}>
          <button className='request-btn'>Request a Quote</button>
        </Link>
      </div>
      <h4 className='home-title'>We are committed to top quality products, plants, service and unique landscaping designs.</h4>
      <div className='main-holder'>

        <div>
          <p className='home-para'>Located in Apsley, Ontario, Jack Lake Landscape offers professional landscape design and construction PLUS a complete line of landscaping products, plants, trees and a fast delivery service.</p>
          <h5 className='specialize'><i><b>We specialize in water front and country properties.</b></i></h5>
        </div>
        <div className='quest'>

          <h4 className='quest-one'><b>QUESTIONS?</b></h4>
          <h3><b>(705) 931-4734</b></h3>
          <p>Talk to a landscape professional.</p>
        </div>
        <div>
        </div>
      </div>
      <div className='main-holder-two'>
        <div className='card'>
          <h2>Design & Construction</h2>
          <p>Our qualified team will take your project from the design stage to completion in an organized, professional and timely manner.</p>
          <Link to={'design-and-contstruction'}>
            <button className='more-info-button'>MORE INFO</button>
          </Link>
        </div>
        <div className='card'>
          <h2>Landscaping Materials</h2>
          <p>We offer fast delivery of 1 to 5 yard loads of soil, mulch, stone and gravel products.</p>
          <Link to={'landscaping-supplies'}>
            <button className='more-info-button'>MORE INFO</button>
          </Link>
        </div>
        <div className='card'>
          <h2>Plants & Trees</h2>
          <p>We specialize in hardy plants and trees suitable for our harsh, Zone 4 climate.</p>
          <Link to={'plants-and-trees'}>
            <button className='more-info-button'>MORE INFO</button>
          </Link>
        </div>

      </div>


      <Carousel />



    </div>
  );
}

export default Home;