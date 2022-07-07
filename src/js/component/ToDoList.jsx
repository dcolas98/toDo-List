import React from 'react'
import { useState } from 'react';
import ToDoForm from './ToDoForm.jsx';
import ToDoItem from './ToDoItem.jsx';

export const ToDoList = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = todo => {
		const newTodos = [todo, ...todos];
		setTodos(newTodos)
	};

	const removeTodo = id => {
		const removeArr = [...todos].filter(todo => todo.id !== id)
		setTodos(removeArr)
	}

	const completeTodo = id => {
		let updatedTodos = todos.map(todo => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete
			}
			return todo;
		})
		setTodos(updatedTodos);
	}
  
	return (
		<div className="bigDiv">
	<div className="todo-container">
		<h1>To Do List</h1>
		<ToDoForm onSubmit={addTodo} />
		<ToDoItem 
		todos={todos}
		completeTodo={completeTodo} removeTodo={removeTodo} />
	</div>
	</div>
  );
}


export default ToDoList;