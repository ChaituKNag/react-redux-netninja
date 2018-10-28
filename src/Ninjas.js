import React from "react";

function Ninjas({ ninjas, deleteNinja }) {
	const ninjaList =
		ninjas &&
		ninjas.map(({ name, age, belt, id }) => {
			return (
				<tr className="ninja" key={id}>
					<td>Name: {name}</td>
					<td>Age: {age}</td>
					<td>Belt: {belt}</td>
					<td>
						<button onClick={() => deleteNinja(id)}>X</button>
					</td>
				</tr>
			);
		});
	return ninjaList.length > 0 ? (
		<table border="1" className="ninja-list">
			<tbody>{ninjaList}</tbody>
		</table>
	) : (
		<p>No ninjas here!</p>
	);
}

export default Ninjas;
