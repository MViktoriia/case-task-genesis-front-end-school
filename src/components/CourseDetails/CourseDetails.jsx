import { CheckIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Heading,
	List,
	ListIcon,
	ListItem,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import StarRatings from "react-star-ratings";
import { nanoid } from "nanoid";
import Hls from "hls.js";
import { Link, useLocation } from "react-router-dom";

function CourseDetails({
	title,
	description,
	rating,
	skills,
	videoLink,
	poster,
}) {
	const location = useLocation();
	const previouseLocation = useRef(location.state?.from ?? "/");
	const videoREf = useRef();
	const url = videoLink;
	useEffect(() => {
		if (url) {
			const hls = new Hls();
			console.log(url);
			console.log(videoREf);
			hls.loadSource(url);
			hls.attachMedia(videoREf.current);
			hls.on(Hls.Events.MANIFEST_PARSED, function () {
				videoREf.current.play();
			});
		}
	}, [url]);

	return (
		<>
			<Button as={Link} mb={3} to={previouseLocation.current}>
				Go back
			</Button>
			<Box
				display="flex"
				justifyContent="center"
				flexDirection={{ base: "column", md: "row" }}
			>
				<Box mr={6}>
					<Heading as="h2" size="md" mb="25px">
						{title}
					</Heading>
					<Text>{description}</Text>
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

					<Box>
						<List spacing={3}>
							{skills?.map((skill) => (
								<ListItem key={nanoid()}>
									<ListIcon as={CheckIcon} color="green.500" />
									{skill}
								</ListItem>
							))}
						</List>
					</Box>
				</Box>
				<Box h="200px" w="280px">
					<video
						ref={videoREf}
						poster={poster}
						width="280"
						controls
						loop
						preload="auto"
						muted
					></video>
				</Box>
			</Box>
		</>
	);
}

export default CourseDetails;
