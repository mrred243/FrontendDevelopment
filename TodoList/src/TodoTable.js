import React from 'react';

const TodoTable = (props) => {
return (
<div>
  <table>
    <tbody>
      <tr><th>Date</th><th>Description</th></tr>
      {props.todos.map((item, index) =>
        <tr key={index}>
          <td>{item.date}</td>
          <td>{item.description}</td>
          <td><button id={index} onClick={() => props.click(index)} >Delete</button></td>
        </tr>)}
    </tbody>
  </table>
</div>
);
}
export default TodoTable;
