import Input from './Input';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from '../features/todoSlice';

const TodosList = () => {
	const todoList = useSelector(selectTodoList);

	return (
		<div>
			<h1>Todos</h1>
			<div className="app_todoContainer">
				{todoList.map((item) => (
					<TodoItem name={item.item} done={item.done} id={item.id} />
				))}
			</div>
			<Input />
		</div>
	);
};

export default TodosList;
