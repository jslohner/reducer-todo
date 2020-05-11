import React from 'react';

function TodoForm({ state, dispatch }) {

	const handleChanges = e => {
		dispatch({ type: 'HANDLE_CHANGES', payload: e.target.value });
	}

	const handleSubmit = e => {
		dispatch({});
	}

	return (
		<form className='todo-form'>
			<input onChange={handleChanges} type='text' name='todoInput' placeholder='Enter Todo Item'/>
			<button>Add Item</button>
		</form>
	);
}

export default TodoForm;
