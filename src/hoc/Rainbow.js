import React from "react";

export default WrappedComponent => {
	const colors = ["red", "green", "blue", "orange", "yellow", "brown"];
	const randomColor = colors[Math.floor(Math.random() * 5)];
	return props => (
		<div className={randomColor + "-text"}>
			<WrappedComponent {...props} />
		</div>
	);
};
