import React from 'react';
import { useSelector } from 'react-redux';
import { selectProfile } from '../features/profileSlice';
import ProfileInput from './ProfileInput';

const Profile = () => {
	const profile = useSelector(selectProfile);

	return (
		<div>
			<h1>Profile</h1>
			<div>{profile.name}</div>
			<div>{profile.email}</div>
			<ProfileInput />
		</div>
	);
};

export default Profile;
