import React from "react";
import {
	Card,
	Image,
	Stack,
	CardBody,
	Heading,
	Text,
	CardFooter,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function CoursesItem({
	img,
	title,
	description,
	skills,
	lessonsCount,
	rating,
}) {
	return (
		<Card
			direction={{ base: "column" }}
			overflow="hidden"
			minH="400px"
			variant="elevated"
			shadow="xl"
			_hover={{
				shadow: "2xl",
			}}
		>
			<Image
				objectFit="cover"
				h={{ base: "100px", md: "300px" }}
				minH="200px"
				maxW={{ base: "100%" }}
				src={img}
				alt={title}
			/>

			<Stack>
				<CardBody>
					<Heading size="md">{title}</Heading>

					<Text py="2">{description}</Text>
					{skills && (
						<Text py="2" fontSize="sm">
							Skills: {skills.join(", ")}
						</Text>
					)}
					<Text py="2">Number of lessons: {lessonsCount}</Text>
				</CardBody>
				<CardFooter pt="0">
					<Text>
						{rating} <StarIcon />
					</Text>
				</CardFooter>
			</Stack>
		</Card>
	);
}

export default CoursesItem;
