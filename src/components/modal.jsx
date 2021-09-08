import '../styles/modal.css';
import chck from '../checkmark.png'
function Modal() {
  return (
    <div id="myModal" className="modal">

      
  <div className="modal-content">
      <img src={chck}/>
      <h4>Success</h4>
      <p>Added To Cart</p>

      </div>

    </div>)
}

export default Modal