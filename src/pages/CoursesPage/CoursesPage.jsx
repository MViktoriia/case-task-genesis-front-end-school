import React, { useEffect, useMemo, useState } from "react";
import CoursesList from "../../components/CoursesList/CoursesList";
import Pagination from "../../components/Pagination/Pagination";
import Section from "../../components/Section/Section";

import * as api from "../../services/api/courses";

function CoursesPage() {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		const getCourses = async () => {
			try {
				const { data } = await api.fetchCourses();
				console.log(data.courses);
				setCourses(data.courses);
			} catch (err) {
				console.log(err);
			}
		};
		getCourses();
	}, []);

	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 10;
	const endOffset = itemOffset + itemsPerPage;
	// console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	const currentItems = useMemo(
		() => courses.slice(itemOffset, endOffset),
		[courses, endOffset, itemOffset]
	);
	const pageCount = useMemo(
		() => Math.ceil(courses.length / itemsPerPage),
		[courses.length]
	);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % courses.length;
		// console.log(
		// 	`User requested page number ${event.selected}, which is offset ${newOffset}`
		// );
		setItemOffset(newOffset);
	};
	return (
		<main>
			<Section>
				<CoursesList courses={currentItems} />
				<Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
			</Section>
		</main>
	);
}

export default CoursesPage;
