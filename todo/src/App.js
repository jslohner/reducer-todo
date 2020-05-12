import React, { useReducer } from 'react';

import { initialState, reducer } from './reducers/reducer.js';

import './App.css';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className='App'>
			<TodoList state={state} dispatch={dispatch}/>
			<TodoForm state={state} dispatch={dispatch}/>
		</div>
	);
}

export default App;
