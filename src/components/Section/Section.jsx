import { Box } from "@chakra-ui/react";
import React from "react";

function Section({ children }) {
	return (
		<Box as="section" pt={12}>
			{children}
		</Box>
	);
}

export default Section;
