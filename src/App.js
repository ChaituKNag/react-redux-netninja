import React, { Component } from "react";

import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
	state = {
		ninjas: [
			{ name: "Ryu", age: 30, belt: "black", id: 1 },
			{ name: "Yoshi", age: 25, belt: "green", id: 2 },
			{ name: "Crystal", age: 20, belt: "pink", id: 3 }
		]
	};

	addNinja(ninja) {
		this.setState({
			ninjas: [
				...this.state.ninjas,
				{ ...ninja, id: this.state.ninjas.length + 1 }
			]
		});
	}

	deleteNinja(id) {
		this.setState({
			ninjas: this.state.ninjas.filter(ninja => ninja.id !== id)
		});
	}
	render() {
		return (
			<div className="App">
				<h1>My first React App</h1>
				<p>Welcome</p>
				<AddNinja onNinjaAdd={this.addNinja.bind(this)} />
				<Ninjas
					ninjas={this.state.ninjas}
					deleteNinja={this.deleteNinja.bind(this)}
				/>
			</div>
		);
	}
}

export default App;
