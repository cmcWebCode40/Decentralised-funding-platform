import Box from "@mui/material/Box";
import React from "react";
import { AppFooter } from "../components/common";
import AppHeader from "../components/common/AppHeader";

const AppLayouts = ({ children }) => {
	return (
		<Box
			sx={{
				position: "relative",
				minHeight: "100vh",
			}}
		>
			<AppHeader />
			<Box>{children}</Box>
			<AppFooter />
		</Box>
	);
};

export default AppLayouts;
