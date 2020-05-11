import React from 'react';

export const initialState = {
	taskList: [
		{
			item: '',
			completed: false,
			id: ''
		}
	],
	addItemInput: ''
};

// export const initialState = [
// 	{
// 		item: 'Grocery shopping',
// 		completed: false,
// 		id: 'init1'
// 	},
// 	{
// 		item: 'Reducer Todo project',
// 		completed: false,
// 		id: 'init2'
// 	},
// 	{
// 		item: 'Clean room',
// 		completed: false,
// 		id: 'init3'
// 	}
// ];

export const reducer = (state, action) => {
	switch(action.type) {
		case 'HANDLE_CHANGES':
			return {
				...state,
				addItemInput: action.payload 
			};
		default:
			return state;
	}
}
