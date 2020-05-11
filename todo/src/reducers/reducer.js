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
				taskList: [...state.taskList,
					{
						item: state.addItemInput,
						completed: false,
						id: Date.now()
					}
				],
				addItemInput: ''
			};
		default:
			return state;
	}
}

// initTask: {
// 	item: '',
// 	completed: false,
// 	id: ''
// }
