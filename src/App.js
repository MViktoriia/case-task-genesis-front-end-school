import { useEffect, useState } from "react";
import CoursesList from "./components/CoursesList/CoursesList";
import * as api from "./services/api/courses";

function App() {
	const [courses, setCourses] = useState([]);

	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState(null);
	// const [search, setSearch] = useState("");
	// const [page, setPage] = useState(1);
	useEffect(() => {
		// if (search === "") {
		// 	return;
		// }

		const getCourses = async () => {
			try {
				await api.getToken();
				const data = await api.fetchCourses();
				setCourses(data);
				console.log(data);
			} catch (err) {
				console.log(err);
			}
		};

		getCourses();
	}, []);
	return (
		<div>
			<CoursesList courses={courses} />
		</div>
	);
}

export default App;
