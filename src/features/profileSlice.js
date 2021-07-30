import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	profile: {},
};

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		saveProfile: (state, action) => {
			state.profile.name = action.payload.name;
			state.profile.email = action.payload.email;
		},
	},
});

export const { saveProfile } = profileSlice.actions;
export const selectProfile = (state) => state.profile.profile;
export default profileSlice.reducer;
