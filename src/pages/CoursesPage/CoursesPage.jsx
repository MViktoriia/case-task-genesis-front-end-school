import React, { useEffect, useState } from "react";
import CoursesList from "../../components/CoursesList/CoursesList";
import * as api from "../../services/api/courses";

function CoursesPage() {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		const getCourses = async () => {
			try {
				const res = await api.fetchCourses();
				const data = await res.json();
				setCourses(data.courses);
			} catch (err) {
				console.log(err);
			}
		};
		getCourses();
	}, []);
	return (
		<main>
			<CoursesList courses={courses} />
		</main>
	);
}

export default CoursesPage;
