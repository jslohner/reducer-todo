import React from 'react';

import Todo from './Todo.js';

function TodoList({ state, dispatch }) {
	const toggleComplete = task => {
		dispatch({ type: 'TOGGLE_COMPLETE', payload: task });
	}

	return (
		<div className='todo-list'>
			<h2>Todo List</h2>
			{
				state.taskList.map(task => {
					return <Todo key={task.id} toggleComplete={toggleComplete} task={task}/>
				})
			}
		</div>
	);
}

export default TodoList;
