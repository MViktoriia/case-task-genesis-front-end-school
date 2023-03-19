import React from "react";
import {
	Card,
	Image,
	CardBody,
	Heading,
	Text,
	CardFooter,
	Box,
} from "@chakra-ui/react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

function CoursesItem({
	id,
	img,
	title,
	description,
	skills,
	lessonsCount,
	rating,
}) {
	return (
		<Link to={`/${id}`} display="flex" height="100%">
			<Card
				display="flex"
				flexDirection="column"
				height="100%"
				overflow="hidden"
				variant="elevated"
				shadow="xl"
				borderRadius="16px"
				_hover={{
					shadow: "2xl",
				}}
			>
				<Box h="160px" w="auto" overflow="hidden">
					<Image h="100%" src={img} alt={title} />
				</Box>

				<Box flex="1">
					<CardBody pb="0">
						<Heading size="md">{title}</Heading>

						<Text py="2">{description}</Text>
						{skills && (
							<Text py="2" fontSize="sm">
								Skills: {skills.join(", ")}
							</Text>
						)}
						<Text py="2" fontSize="sm">
							Lessons: {lessonsCount}
						</Text>
					</CardBody>
					<CardFooter pt="0">
						<Box display="flex" alignItems="end">
							<Text fontSize="sm" mr="5px">
								{rating}
							</Text>
							<StarRatings
								rating={rating}
								starRatedColor="black"
								numberOfStars={5}
								starDimension="15px"
								starSpacing="3px"
							/>
						</Box>
					</CardFooter>
				</Box>
			</Card>
		</Link>
	);
}

export default CoursesItem;
