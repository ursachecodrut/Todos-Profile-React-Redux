import React from 'react';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';

const TodoItem = ({ name, done, id }) => {
	const dispatch = useDispatch();
	const handleChange = () => {
		dispatch(setCheck(id));
	};

	return (
		<div className="todoItem">
			<input
				type="checkbox"
				value={done}
				checked={done}
				onChange={handleChange}
			/>
			<p className={done && 'todoItemDone'}>{name}</p>
		</div>
	);
};

export default TodoItem;
