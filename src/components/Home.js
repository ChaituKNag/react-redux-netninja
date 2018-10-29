import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "axios";

export default class Home extends Component {
	state = {
		posts: []
	};
	componentDidMount() {
		http.get(`https://jsonplaceholder.typicode.com/posts`).then(response => {
			console.log(response);
			this.setState({
				posts: response.data.slice(0, 10)
			});
		});
	}
	render() {
		const { posts } = this.state;
		const postList = posts.length ? (
			posts.map(post => (
				<div className="post card" key={post.id}>
					<div className="card-content">
						<span className="card-title">
							<Link to={"/post/" + post.id}>{post.title}</Link>
						</span>
						<p>{post.body}</p>
					</div>
				</div>
			))
		) : (
			<p className="center">No posts yet! Stay tuned...</p>
		);
		return (
			<div className="Home container">
				<h4 className="center">Home</h4>
				{postList}
			</div>
		);
	}
}
