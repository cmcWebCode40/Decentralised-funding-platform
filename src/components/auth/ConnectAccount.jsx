import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HelpHandImage from "../../assets/helpinghands.jpg";
import useReach from "../../hooks/useReach";

const ConnectAccount = () => {
	const { connecAccount } = useReach();
	return (
		<Box
			sx={{
				textAlign: "center",
				backgroundImage: `url(${HelpHandImage})`,
				height: "100vh",
			}}
		>
			<Box
				variant='h4'
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					display: "flex",
					transform: `translate(-50%, -50%)`,
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Typography
					variant='h2'
					sx={{
						fontWeight: 600,
						color: "white",
					}}
				>
					A Decentralize Fundraising Platform
				</Typography>
				<Typography
					variant='body'
					sx={{
						fontWeight: 600,
						color: "white",
						my: 2,
					}}
				>
					Developed with Reach lang
				</Typography>

				<Box sx={{ marginY: 5 }}>
					<Button variant='contained' color='primary' onClick={connecAccount}>
						Connect Wallet
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default ConnectAccount;
