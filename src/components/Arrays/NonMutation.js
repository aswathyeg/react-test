import React, { useState } from 'react'
import AddTodo from './AddTodo'
import Items from './Items';
let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

const NonMutation = () => {
   const[todos,setTodos]=useState(initialTodos);

   const handleAdd=(title)=>{
    todos.push({
        id: nextId++,
        title: title,
        done: false
      });
    }
   function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }
  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

    
  return (
    <div>
        
        <AddTodo onAddTodo={handleAdd}/>
        <Items onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo} />
       
        </div>
  )
}

export default NonMutation