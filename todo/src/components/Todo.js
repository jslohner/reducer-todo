import React from 'react';

function Todo(props) {

	const clickHandler = e => {
		props.toggleComplete(props.task);
	}

	return (
		<div className='task'>
			<p onClick={clickHandler} className={`todo-item${props.task.completed === true ? ' completed' : ''}`}>{props.task.item}</p>
		</div>
	);
}

export default Todo;
