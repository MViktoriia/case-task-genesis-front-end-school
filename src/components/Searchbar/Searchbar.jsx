import React from "react";
import {
	Box,
	Input,
	InputGroup,
	InputRightElement,
	IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Searchbar({ handleClick }) {
	return (
		<Box as="form">
			<InputGroup size="md" width="100%" px="10px">
				<Input
					pr="4.5rem"
					type="text"
					placeholder="Search for a cours"
					borderColor="rgb(0 166 152)"
					borderWidth="2px"
				/>
				<InputRightElement width="4.5rem">
					<IconButton
						type="submit"
						h="1.75rem"
						size="sm"
						onClick={handleClick}
						aria-label="Search database"
						icon={<SearchIcon />}
					/>
				</InputRightElement>
			</InputGroup>
		</Box>
	);
}

export default Searchbar;
