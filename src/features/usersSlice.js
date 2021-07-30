import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: '',
	error: '',
	data: [],
};

// export const fetchUsers = createAsyncThunk(
// 	'users/fetchUsers',
// 	async (endpoint, { getState }) => {
// 		const res = await fetch(endpoint);
// 		if (!res.ok) {
// 			throw Error(res.statusText);
// 		}
// 		const json = await res.json();
// 		return json;
// 	}
// );

export const fetchUsers = (endpoint) => {
	return async (dispatch) => {
		dispatch(fetchUsersStart());
		try {
			const res = await fetch(endpoint);
			if (!res.ok) throw Error(res.statusText);
			const json = await res.json();
			return dispatch(fetchUsersSuccess(json));
		} catch (error) {
			return dispatch(fetchUsersFailure(error.message));
		}
	};
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		// [fetchUsers.pending]: (state) => {
		// 	state.loading = 'yes';
		// },
		// [fetchUsers.rejected]: (state, action) => {
		// 	state.loading = '';
		// 	state.error = action.payload;
		// },
		// [fetchUsers.fulfilled]: (state, action) => {
		// 	state.loading = '';
		// 	state.data = action.payload;
		// },
		fetchUsersStart: (state) => {
			state.loading = 'yes';
		},
		fetchUsersFailure: (state, action) => {
			state.loading = '';
			state.error = action.payload;
		},
		fetchUsersSuccess: (state, action) => {
			state.loading = '';
			state.data = action.payload;
		},
	},
});

export const { fetchUsersStart, fetchUsersFailure, fetchUsersSuccess } =
	usersSlice.actions;
export const selectUsersList = (state) => state.users.data;
export default usersSlice.reducer;
