import React from 'react'
import { useState, useEffect, useRef } from 'react'

export const ToDoForm = (props) => {
	const [input, setInput] = useState('')

	const inputRef = useRef(null)
	useEffect(() => {
		inputRef.current.focus()
	})

	const handleChange = e => {
		setInput(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (input != "") {
			props.onSubmit({
				id: Math.floor(Math.random() * 100000),
				text: input
			});
	
			setInput('');
			
		}
	};

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<input type="text" placeholder="Add a todo" value={input} name="text" className='input' onChange={handleChange} ref={inputRef} />
		</form>
	)
}

export default ToDoForm;