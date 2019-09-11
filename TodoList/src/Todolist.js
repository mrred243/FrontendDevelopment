import React, {useState} from 'react';
import TodoTable from './TodoTable';

const TodoList = () => {
  const [todo, setTodo] = useState({
    description: '',
    date: ''
  });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }



  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({description: '', date: ''});
}

const deleteTodo = index => {
    todos.splice(index, 1);
    console.log(todos);
    setTodos([...todos]);
}


    const itemRows = todos.map((todo, index) =>
    <tr key={index}>
      <td>{todo.date}</td>
      <td>{todo.description}</td>
      <td><button id={index} onClick={deleteTodo} >Delete</button></td>

    </tr>);


  return (
    <div>
      <form onSubmit={addTodo}>
        <span>Date:</span>
        <input type="date" name="date" onChange={inputChanged} value={todo.date}/>
        <span>Description:</span>
        <input type="text" name="description" onChange={inputChanged} value={todo.description}/>
        <input type="submit" value="Add"/>
      </form>
      <TodoTable todos={todos} click={deleteTodo}/>
    </div>
  );
};

export default TodoList;
