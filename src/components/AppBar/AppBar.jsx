import React from "react";
import { Box } from "@chakra-ui/react";
import Searchbar from "../Searchbar/Searchbar";

function AppBar() {
	return (
		<Box
			as="header"
			display="flex"
			justifyContent="center"
			position="sticky"
			top="0"
			zIndex="1"
			px="4.5rem"
			py="1.5rem"
			bgColor="white"
			borderBottom="1px solid var(--chakra-colors-chakra-border-color)"
			shadow="lg"
		>
			<Searchbar />
		</Box>
	);
}

export default AppBar;
