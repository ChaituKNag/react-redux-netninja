import React, { Component } from "react";

class AddTodo extends Component {
	state = {
		content: ""
	};

	handleChange(e) {
		this.setState({
			content: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.content !== "") {
			this.props.onAddTodo(this.state.content);
			this.setState({
				content: ""
			});
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label>Add new todo:</label>
					<input
						type="text"
						value={this.state.content}
						onChange={this.handleChange.bind(this)}
					/>
				</form>
			</div>
		);
	}
}

export default AddTodo;
