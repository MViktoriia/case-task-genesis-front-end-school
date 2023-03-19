import { List, ListItem } from "@chakra-ui/react";
import React from "react";
import CoursesItem from "../CoursesItem/CoursesItem";

function CoursesList({ courses }) {
	return (
		<List
			display="grid"
			gridTemplateColumns={{
				base: "1fr",
				md: "repeat(2, minmax(0, 1fr))",
				lg: "repeat(3, minmax(0, 1fr))",
			}}
			gap={6}
		>
			{courses.map((cours) => (
				<ListItem
					key={cours.id}
					maxW="364px"
					display="flex"
					justifySelf="center"
				>
					<CoursesItem
						id={cours.id}
						img={cours.previewImageLink + "/cover.webp"}
						video={cours.meta.courseVideoPreview?.link}
						title={cours.title}
						description={cours.description}
						skills={cours.meta.skills}
						lessonsCount={cours.lessonsCount}
						rating={cours.rating}
					/>
				</ListItem>
			))}
		</List>
	);
}

export default CoursesList;
