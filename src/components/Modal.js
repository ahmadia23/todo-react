import './Modal.css'
import './Todo.css'

function Modal(props){

  function cancelHandler() {
    props.onCancel()
  }
  function confirmHandler() {

  }

  return(
    <div>
      <div className="modal">
        <div>Are you sure ? </div>
        <div className="modal-options">
          <button type="submit" className='button-todo' onClick={confirmHandler}> Confirm </button>
          <button type="submit" className='button-modal-cancel' onClick={cancelHandler}> Cancel </button>
        </div>
      </div>

    </div>
  )
}

export default Modal;
