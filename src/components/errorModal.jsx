import '../styles/modal.css';
import x from '../delete.png'
function ErrorModal({message}) {
  return (
    <div id="myErrorModal" className="error-modal">


      <div className="modal-content">
        <img className='error-img' src={x} alt=''/>
        <h4>Error!</h4>
        <p>{message}</p>

      </div>

    </div>)
}

export default ErrorModal