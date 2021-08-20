import '../styles/nav.css';
import {Link} from 'react-router-dom';

let buttonValues = [{ value: "Home", urlLink: '/' }, { value: "Design and Construction", urlLink: '/design-and-contstruction' }, { value: "Landscaping Supplies", urlLink: '/landscaping-supplies'}, { value: "Gallery", urlLink: '/past-work-gallery'}, { value: "Plants and Trees", urlLink: '/plants-and-trees'}, {value: "Contact Us", urlLink: '/contact'}]

const Nav = ({cart}) => {

  return (
    <nav className='nav-button-bar'>
      {buttonValues.map((item, index) => {
        return(
          <Link to={item.urlLink} key={index}>
            <button value={index} className='nav-button'>{item.value}</button>
          </Link>
        )
      })}
      
    </nav>
  );
}

export default Nav;
