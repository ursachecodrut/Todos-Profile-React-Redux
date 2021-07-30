import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import profileReducer from '../features/profileSlice';

export const store = configureStore(
	{
		reducer: {
			todos: todoReducer,
			profile: profileReducer,
		},
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
