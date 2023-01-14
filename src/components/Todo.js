import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import './Todo.css';
import React from 'react';

function Todo(props) {
  const [taskIsComplete, setTaskIsComplete] = useState(props.completed);
  const [barredClasses, setbarredClasses] = useState('');
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  function checkHandler() {
    if (taskIsComplete){
      setbarredClasses('');
      return setTaskIsComplete(false);
    }
    setbarredClasses('barred');
   return  setTaskIsComplete(true);
  }

  function deleteHandler() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }


  // function barred() {
  //   return classes = 'card barred';
  // }


  return (

    <div className= 'card'>
      <div className='todo-check'>
        <input type="checkbox" onClick={checkHandler}/>
        <h3 className={barredClasses}> {props.todo} </h3>
      </div>
      <div className='end-of-todo'>
        <p> {taskIsComplete ? "done" : "Not completed"}</p>
        <button className='button-todo' onClick={deleteHandler}> Cancel </button>
      </div>
      {ModalIsOpen && <Modal onCancel= {closeModal}/>}
      {ModalIsOpen && <Backdrop  onClick={closeModal} />}
    </div>
  )
}

export default Todo;
