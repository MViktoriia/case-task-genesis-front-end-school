import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import CourseLessonsList from "../../components/CourseLessonsList/CourseLessonsList";
import Section from "../../components/Section/Section";
import * as api from "../../services/api/courses";

function SingleCoursePage() {
	const [course, setCourse] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const { courseId } = useParams();

	useEffect(() => {
		const getCourseDetails = async () => {
			try {
				setIsLoading(true);
				const { data } = await api.fetchCourseDetails(courseId);
				setCourse(data);
				setIsLoading(false);
				console.log(data);
			} catch (err) {
				console.log(err);
				setError(err);
				setIsLoading(false);
			}
		};
		getCourseDetails();
	}, [courseId]);

	return (
		<main>
			<Section>
				{error && <p>Something went wrong...</p>}
				{isLoading ? (
					<p>Is loading</p>
				) : (
					<>
						<CourseDetails
							title={course?.title}
							description={course?.description}
							rating={course?.rating}
							skills={course?.meta.skills}
							videoLink={course?.lessons[0].link}
							poster={course?.lessons[0].previewImageLink + ".webp"}
						/>
						<CourseLessonsList lessons={course?.lessons} />
					</>
				)}
			</Section>
		</main>
	);
}

export default SingleCoursePage;
