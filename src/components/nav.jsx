import '../styles/nav.css';
import {Link} from 'react-router-dom';
import Hamburger from './hamburger.jsx';
let buttonValues = [{ value: "Home", urlLink: '/' }, { value: "Design", urlLink: '/design-and-contstruction' }, { value: "Landscaping Material", urlLink: '/landscaping-supplies'}, { value: "Gallery", urlLink: '/past-work-gallery'}, {value: "Contact Us", urlLink: '/contact'}]

const Nav = () => {
  return (
    <nav className='nav-button-bar'>
        <div class="nav-container deepOrange pullRightLeft">
      {buttonValues.map((item, index) => {
        return(
          <Link to={item.urlLink} key={index}>
            <button value={index} className='nav-button'>{item.value}</button>
          </Link>
        )
      })}
      </div> 
        <Hamburger/>

    
    </nav>
  );
}

export default Nav;
