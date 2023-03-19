import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ pageCount, handlePageClick }) {
	return (
		<Flex justify="center">
			<Box
				as={ReactPaginate}
				previousLabel="<"
				nextLabel=">"
				pageCount={pageCount}
				onPageChange={handlePageClick}
				renderOnZeroPageCount={null}
				containerClassName="paginationList"
				pageClassName="paginationButton"
				pageLinkClassName="paginationLink"
				previousClassName="paginationButton prevButton"
				previousLinkClassName="paginationLink extremeButtonsLink prevButtonLink"
				nextClassName="paginationButton nextButton"
				nextLinkClassName="paginationLink extremeButtonsLink nextButtonLink"
				// activeClassName="paginationButton"
				// activeLinkClassName="paginationLink"
				breakClassName="paginationBreak"
				__css={{
					"&": {
						display: "flex",
						listStyle: "none",
						pt: "60px",
					},
					".paginationButton": {
						display: "flex",
						justify: "center",
						align: "center",
						w: "40px",
						h: "40px",
						mr: "10px",
						bg: "#FFFFFF",
						borderRadius: "50%",
					},
					".paginationButton:nth-last-of-type(-n + 2)": {
						mr: "0",
					},
					".paginationButton:not(.disabled):hover": {
						bg: "accent.accentOrange",
						color: "#FFFFFF",
					},
					".paginationLink": {
						w: "40px",
						h: "40px",
						textAlign: "center",
						p: "10px",
						pb: "10px",
						fontSize: "14px",
						lineHeight: "1.3",
						border: "2px solid",
						borderColor: "rgb(0 166 152)",
						borderRadius: "50%",
					},
					".prevButton": {
						w: "60px",
						mr: "15px",
						borderRadius: "10px",
					},
					".nextButton": {
						w: "60px",
						ml: "15px",
						borderRadius: "10px",
					},
					".extremeButtonsLink": {
						w: "60px",
						px: "10px",
						py: "10px",
						borderRadius: "10px",
					},
					".paginationBreak": {
						display: "flex",
						alignItems: "center",
						mr: "10px",
						fontWeight: "500",
						fontSize: "20px",
					},
					".selected": {
						bg: "rgb(0 166 152)",
						color: "#FFFFFF",
					},
					".disabled > a": {
						borderColor: "#bfbfbf",
						bg: "#f3f3f3",
						color: "#bfbfbf",
					},
					".disabled:hover > a": {
						cursor: "default",
					},
				}}
			/>
		</Flex>
	);
}

export default Pagination;
