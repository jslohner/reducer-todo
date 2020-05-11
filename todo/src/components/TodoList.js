import React, { useReducer } from 'react';

import { initialState, reducer } from '../reducers/reducer.js';

import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

function TodoList() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<h2>TodoList</h2>
			{
				state.taskList.map(item => {
					return <Todo key={item.id} task={item}/>
				})
			}
			<TodoForm state={state} dispatch={dispatch}/>
		</div>
	);
}

export default TodoList;
