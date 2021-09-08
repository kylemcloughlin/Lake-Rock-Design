import '../styles/nav.css';
import {Link} from 'react-router-dom';
import Hamburger from './hamburger.jsx';
let buttonValues = [{ value: "Home", urlLink: '/' }, { value: "Design", urlLink: '/design-and-contstruction' }, { value: "Landscaping Material", urlLink: '/landscaping-supplies'}, { value: "Gallery", urlLink: '/past-work-gallery'}, { value: "Plants and Trees", urlLink: '/plants-and-trees'}, {value: "Contact Us", urlLink: '/contact'}]

const Nav = ({cart}) => {
  const handleMoblie = () => {
    console.log('clicked')
  } 
  return (
    <nav className='nav-button-bar'>
      <div className='nav-button-bar-reg'>
      {buttonValues.map((item, index) => {
        return(
          <Link to={item.urlLink} key={index}>
            <button value={index} className='nav-button'>{item.value}</button>
          </Link>
        )
      })}
        <Hamburger/>
      </div>
    </nav>
  );
}

export default Nav;
