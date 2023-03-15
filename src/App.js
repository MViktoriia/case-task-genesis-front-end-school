import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import SingleCoursePage from "./pages/SingleCoursePage/SingleCoursePage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<CoursesPage />} />
				<Route path="/:courseId" element={<SingleCoursePage />}></Route>
			</Route>
			<Route path="*" element={<Navigate to={"/"} />} />
		</Routes>
	);
}

export default App;
