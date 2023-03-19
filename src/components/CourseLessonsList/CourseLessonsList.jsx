import { Heading, List } from "@chakra-ui/react";
import React from "react";
import CourseLessonItem from "../CourseLessonItem/CourseLessonItem";
import Section from "../Section/Section";

function CourseLessonsList({ lessons }) {
	return (
		<Section>
			<Heading as="h2">Lessons</Heading>
			<ul>
				{lessons?.map((lesson) => (
					<List key={lesson.id}>
						<CourseLessonItem
							title={lesson.title}
							lessonImg={
								lesson.previewImageLink +
								"/" +
								"lesson-" +
								lesson.order +
								".webp"
							}
							lessonStatus={lesson.status}
						/>
					</List>
				))}
			</ul>
		</Section>
	);
}

export default CourseLessonsList;
