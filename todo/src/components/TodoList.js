import React, { useReducer } from 'react';

import { initialState, reducer } from '../reducers/reducer.js';

import Todo from './Todo.js';

function TodoList() {

	return (
		<div>
			<h2>TodoList</h2>
			{
				initialState.map(item => {
					return <Todo key={item.id} task={item}/>
				})
			}
		</div>
	);
}

export default TodoList;
