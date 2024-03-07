import React from 'react';
import useTodos from './Todos';

const TodoList = () => {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodos();
    // return (
    //     <div>
    //         <h1>Todo List</h1>
    //         <input
    //             type="text"
    //             placeholder="Add new todo"
    //             onKeyUp={(e) => {
    //                 if (e.key === 'Enter') {
    //                     addTodo(e.target.value);
    //                     e.target.value = '';
    //                 }
    //             }}
    //         />
    //         <ul>
    //             {todos.map((todo) => (
    //                 <li key={todo.id}>
    //                     <input
    //                         type="checkbox"
    //                         checked={todo.completed}
    //                         onChange={() => toggleTodo(todo.id)}
    //                     />
    //                     {todo.text}
    //                     <button onClick={() => removeTodo(todo.id)}>
    //                         Remove
    //                     </button>
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );
};

export default TodoList;
