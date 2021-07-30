import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveProfile } from '../features/profileSlice';

const ProfileInput = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const dispatch = useDispatch();

	const addProfile = () => {
		dispatch(
			saveProfile({
				name: name,
				email: email,
			})
		);
	};

	return (
		<div>
			<label htmlFor="">name</label>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<br />
			<br />
			<label htmlFor="">Email</label>
			<input
				type="text"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br />
			<button onClick={addProfile}>Add Profile</button>
		</div>
	);
};

export default ProfileInput;
