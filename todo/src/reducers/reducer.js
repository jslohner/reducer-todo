export const initialState = {
	taskList: [],
	addItemInput: ''
};

export const reducer = (state, action) => {
	switch(action.type) {
		case 'HANDLE_CHANGES':
			return {
				...state,
				addItemInput: action.payload
			};
		case 'HANDLE_SUBMIT':
			return {
				...state,
				taskList: (state.addItemInput ? [...state.taskList, { item: state.addItemInput, completed: false, id: Date.now() }] : []),
				addItemInput: ''
			};
		case 'TOGGLE_COMPLETE':
			// return {
			// 	...state,
			// 	taskList: state.taskList.map(task => {
			// 		if (task.item === action.payload.item) {
			// 			return {
			// 				...task,
			// 				completed: !task.completed
			// 			}
			// 		}
			// 			return task;
			// 		})
			// };
			return {
				...state,
				taskList: state.taskList.map(task => action.payload === task ? {...task, completed: !task.completed} : task)
			};
		case 'CLEAR_COMPLETE':
			return {
				...state,
				taskList: state.taskList.filter(task => !task.completed)
			};
		default:
			return state;
	}
}
