import '../styles/modal.css';
import chck from '../photos/checkmark.png'
function Modal() {
  return (
    <div id="myModal" className="modal">

      
  <div className="modal-content">
        <img className='success-img' src={chck} alt=''/>
      <h4>Success</h4>
      <p>Added To Cart</p>

      </div>

    </div>)
}

export default Modal