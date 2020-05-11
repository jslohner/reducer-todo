import React from 'react';

function Todo(props) {

	return (
		<div className='task'>
			<p>{props.task.item}</p>
		</div>
	);
}

export default Todo;
