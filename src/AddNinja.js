import React, { Component } from "react";

class AddNinja extends Component {
	state = {
		name: null,
		age: null,
		belt: null
	};

	handleChange(e) {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onNinjaAdd(this.state);
	}

	render() {
		return (
			<div className="add-ninja-form">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						onChange={this.handleChange.bind(this)}
					/>{" "}
					<br />
					<label htmlFor="age">Age:</label>
					<input type="text" id="age" onChange={this.handleChange.bind(this)} />
					<br />
					<label htmlFor="belt">Belt:</label>
					<input
						type="text"
						id="belt"
						onChange={this.handleChange.bind(this)}
					/>
					<br />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default AddNinja;
