import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectUsersList } from '../features/usersSlice';

const Users = () => {
	const dispatch = useDispatch();
	const users = useSelector(selectUsersList);

	const addUsers = () => {
		dispatch(fetchUsers('https://jsonplaceholder.typicode.com/users'));
	};

	// useEffect(() => {
	// 	dispatch(fetchUsers('https://jsonplaceholder.typicode.com/users'));
	// }, [dispatch]);

	return (
		<div>
			<button onClick={addUsers}>Add users</button>
			<div>
				{users && users.map((user) => <p key={user.id}>{user.name}</p>)}
			</div>
		</div>
	);
};

export default Users;
