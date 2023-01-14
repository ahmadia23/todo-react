import { useEffect, useState } from 'react';
import Todo from './Todo';
import './TodoList.css';


function TodoList() {



  const [todoValues, setTodoValues] = useState([]);

    useEffect(() => {
      fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        data.todos.forEach(todo => {
          todo.completed = false;
        });
        return (setTodoValues(data.todos));
        })}, []);

  return (
    <div>
      <div className='container'>
        <div className='todos-list'>
          {todoValues.map(todoValue => (
            <Todo key={todoValue.id} todo={todoValue.todo} completed={todoValue.completed}> </Todo>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TodoList;
