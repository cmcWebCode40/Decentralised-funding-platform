import React from "react";
import Box from "@mui/material/Box";
import { DonationCard } from "../common";
import DonationTable from "./DonationTable";
import WaitingForAttacher from "./WaitingForAttacher";

const DeployerInteract = () => {
	return (
		<>
			<Box
				sx={{
					textAlign: "center",
					margin: "auto",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
					mt: 7,
				}}
			>
				<Box
					sx={{
						margin: "auto",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<DonationCard />
					<WaitingForAttacher />
				</Box>
				<DonationTable />
			</Box>
		</>
	);
};

export default DeployerInteract;
