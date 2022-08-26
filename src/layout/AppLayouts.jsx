import { Alert, AlertTitle } from "@mui/material";
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
			<Alert severity='info'>
				<AlertTitle>Info</AlertTitle>
				You Can interact with this dapp using <strong>MyAlgo Wallet</strong> ,
				support for metamask and wallet connect coming soon..🚀🚀
			</Alert>
			<Box>{children}</Box>
			<AppFooter />
		</Box>
	);
};

export default AppLayouts;
