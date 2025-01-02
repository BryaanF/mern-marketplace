import * as React from "react";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import AppBarMainPage from "./components/AppBarMainPage";

export default function App() {
	return (
		<Container  sx={{ m: 0, px: 0 }}>
			<AppBarMainPage />
			<Button variant="contained" color="primary">
				Hello World
			</Button>
		</Container>
	);
}
