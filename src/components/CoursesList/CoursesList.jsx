import { List, ListItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CoursesItem from "../CoursesItem/CoursesItem";

function CoursesList({ courses }) {
	return (
		<List>
			<SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
				{courses.map((cours) => (
					<ListItem key={cours.id}>
						<CoursesItem
							img={cours.previewImageLink + "/cover.webp"}
							title={cours.title}
							description={cours.description}
							skills={cours.meta.skills}
							lessonsCount={cours.lessonsCount}
							rating={cours.rating}
						/>
					</ListItem>
				))}
			</SimpleGrid>
		</List>
	);
}

export default CoursesList;
