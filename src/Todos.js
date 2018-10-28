import React from "react";

export default ({ todos, deleteTodo }) => {
	const todoList =
		todos.length > 0 ? (
			todos.map(todo => (
				<div
					className="collection-item"
					key={todo.id}
					onClick={() => deleteTodo(todo.id)}
				>
					<span>{todo.content}</span>
				</div>
			))
		) : (
			<p className="center">You have no todos left, Yay!</p>
		);
	return <div className="todos collection">{todoList}</div>;
};
