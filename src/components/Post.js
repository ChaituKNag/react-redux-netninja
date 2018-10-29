import React, { Component } from "react";
import http from "axios";
export default class Post extends Component {
	state = {
		post: null
	};
	componentDidMount() {
		http
			.get(
				`https://jsonplaceholder.typicode.com/posts/${
					this.props.match.params.id
				}`
			)
			.then(response => {
				this.setState({
					post: response.data
				});
				console.log(response.data);
			});
	}
	render() {
		const post = this.state.post ? (
			<div className="post">
				<h4 className="center">{this.state.post.title}</h4>
				<p>{this.state.post.body}</p>
			</div>
		) : (
			<div className="center">Loading post...</div>
		);
		return <div className="container">{post}</div>;
	}
}
