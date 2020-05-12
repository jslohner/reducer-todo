import React from 'react';

function TodoForm({ state, dispatch }) {

	const handleChanges = e => {
		dispatch({ type: 'HANDLE_CHANGES', payload: e.target.value });
	}

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({ type: 'HANDLE_SUBMIT' });
	}

	const clearComplete = e => {
		e.preventDefault();
		dispatch({ type: 'CLEAR_COMPLETE' })
	}

	return (
		<form onSubmit={handleSubmit} className='todo-form'>
			<input value={state.addItemInput} onChange={handleChanges} type='text' name='todoInput' placeholder='Enter Todo Item'/>
			<button onClick={handleSubmit}>Add Item</button>
			<button onClick={clearComplete}>Clear Completed</button>
		</form>
	);
}

export default TodoForm;
