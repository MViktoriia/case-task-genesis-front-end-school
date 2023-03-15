import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import AppBar from "../AppBar/AppBar";

export default function Layout() {
	return (
		<Container maxW="1280px">
			<AppBar />
			<Suspense fallbeck={<div>Loading page...</div>}>
				<Outlet />
			</Suspense>
		</Container>
	);
}
