import React from "react";

function CoursesList({ courses }) {
	return (
		<ul>
			{courses.map((cours) => (
				<li key={cours.id}>{cours.title}</li>
			))}
		</ul>
	);
}

export default CoursesList;
