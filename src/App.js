import React, { Component } from "react";

import Todos from "./Todos";
import AddTodo from "./AddTodo";
class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				content: "buy some milk"
			},
			{
				id: 2,
				content: "play mario kart"
			}
		]
	};

	addTodo(content) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: this.state.todos.length + 1,
					content
				}
			]
		});
	}

	deleteTodo(id) {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id)
		});
	}

	render() {
		return (
			<div className="Todo-App container">
				<h1 className="center blue-text">Todo's</h1>
				<AddTodo onAddTodo={this.addTodo.bind(this)} />
				<Todos
					todos={this.state.todos}
					deleteTodo={this.deleteTodo.bind(this)}
				/>
			</div>
		);
	}
}

export default App;
