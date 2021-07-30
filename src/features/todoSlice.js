import { createSlice } from '@reduxjs/toolkit';

// const [todoList, setTodoList] = userState([]);

const initialState = {
	todoList: [],
};

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		saveTodo: (state, action) => {
			state.todoList.push(action.payload);
		},
		setCheck: (state, action) => {
			state.todoList.forEach((item) => {
				if (action.payload === item.id) {
					item.done = !item.done;
				}
			});
		},
	},
});

export const { saveTodo, setCheck } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
