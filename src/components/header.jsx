import '../styles/header.css';
import phone from './phone.png';

function Header() {
  return (
    <div className="App-header">
      <div className="company-name">
        <h6 className="company-name-title">Landscaping & Supply</h6>
      </div>
      <div className='company-number'>
      <div className='img-div'>
        <img className='company-number-img' src={phone}/>
      </div>
        <h6 className='company-number-number'> (416)-509-5458</h6>
      </div>
      <div className='company-address'>
        <div className='address-img-div'>
          <img className='company-number-img' src={phone} />
        </div>
        {/* <img className='company-address-img' /> */}
        <h6 className='company-address-number'>find us on a the map</h6>
    </div>
    </div>
  );
}

export default Header;
