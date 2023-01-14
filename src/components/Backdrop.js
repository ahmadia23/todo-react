import './Backdrop.css'

function Backdrop(props) {
  return(
    <div>
      <div className="backdrop" onClick={props.onClick}> </div>
    </div>
  )
}

export default Backdrop;
