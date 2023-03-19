import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Image,
	Stack,
} from "@chakra-ui/react";
import React from "react";

function CourseLessonItem({ title, lessonImg, lessonStatus }) {
	console.log(lessonStatus);
	return (
		<div>
			<Card
				direction={{ base: "column", sm: "row" }}
				overflow="hidden"
				variant="outline"
			>
				<Image
					objectFit="cover"
					maxW={{ base: "100%", sm: "200px" }}
					src={lessonImg}
					alt="lesson img"
				/>

				<Stack>
					<CardBody>
						<Heading size="md">{title}</Heading>

						{/* <Text py="2">
							Caffè latte is a coffee beverage of Italian origin made with
							espresso and steamed milk.
						</Text> */}
					</CardBody>

					<CardFooter>
						<Button
							isDisabled={lessonStatus === "locked" ? true : false}
							variant="solid"
							colorScheme="blue"
						>
							Show
						</Button>
					</CardFooter>
				</Stack>
			</Card>
		</div>
	);
}

export default CourseLessonItem;
