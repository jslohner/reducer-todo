import React, { useReducer } from 'react';

import { initialState, reducer } from '../reducers/reducer.js';

import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

function TodoList() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const toggleComplete = task => {
		dispatch({ type: 'TOGGLE_COMPLETE', payload: task });
	}

	return (
		<div>
			<h2>TodoList</h2>
			{
				state.taskList.map(task => {
					return <Todo key={task.id} toggleComplete={toggleComplete} task={task}/>
				})
			}
			<TodoForm state={state} dispatch={dispatch}/>
		</div>
	);
}

export default TodoList;
