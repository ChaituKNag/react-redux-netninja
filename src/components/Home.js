import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Home extends Component {
	
	render() {
		const { posts } = this.props;
		console.log(posts);
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

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(Home);