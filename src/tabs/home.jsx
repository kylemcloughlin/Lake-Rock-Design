import '../styles/home.css';
import { Link } from 'react-router-dom';
import Carousel from '../components/carousel.jsx';
import banner from '../banner.jpg';
const Home = () => {
  return (
    <div className='home-container'>
      <div className='request-holder'>
        <h2 className='call-to'>TRANSFORMING OUTDOOR SPACES</h2>
        <Link to={'request-quote'}>
          <button className='request-btn'>Request a Quote</button>
        </Link>
      </div>
      <h4 className='home-title'>We are committed to top quality products, plants, service and unique landscaping designs.</h4>
      <div className='main-holder'>

        <div>
          <p className='home-para'>Located in Apsley, Ontario, Lake Rock Design offers professional landscape design and construction along with a complete line of landscaping products, plants, and a fast delivery service.</p>
          <h5 className='specialize'><i><b>We specialize in water front and country properties.</b></i></h5>
        </div>
        <div className='quest'>

          <h4 className='quest-one'><b>LANDSCAPING QUESTIONS?</b></h4>
          <h3><b>(705) 931-4734</b></h3>
          <p>Talk to a professional.</p>
        </div>
        <div>
        </div>
      </div>
      <div className='main-holder-two'>
        <div className='card'>
          <h2>Design & Construction</h2>
          <p>Our qualified professional team will take your project from design to completion in an organized and timely manner.</p>
          <Link to={'design-and-contstruction'}>
            <button className='more-info-button'>MORE INFO</button>
          </Link>
        </div>
        <div className='card'>
          <h2>Landscaping Materials</h2>
          <p>We offer fast delivery of soil, mulch, stone, gravel and related products.</p>
          <Link to={'landscaping-supplies'}>
            <button className='more-info-button'>MORE INFO</button>
          </Link>
        </div>
        <div className='card'>
          <h2>Featured Work</h2>
          <p>Photo Gallery of past and current projects.</p>
          <Link to={'past-work-gallery'}>
            <button className='more-info-button'>MORE INFO</button>
          </Link>
        </div>

      </div>


      <Carousel />



    </div>
  );
}

export default Home;