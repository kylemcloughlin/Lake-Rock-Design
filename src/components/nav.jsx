import '../styles/nav.css';
let buttonValues = ["Home","Design and Construction", "Gallery", "Gallery", "Plants and Trees", "Contact Us"]

const Nav = ({passNav}) => {
 const  handleClick = (e) => {
  e.preventDefault();
  console.log('hit');
  console.log(e.target.value)
  passNav(e.target.value)
  } 
  return (
    <nav>

      {buttonValues.map((value, index) => {
        return(
          <button value={index} onClick={handleClick}>{value}</button>
        )
      })}
      
    </nav>
  );
}

export default Nav;
