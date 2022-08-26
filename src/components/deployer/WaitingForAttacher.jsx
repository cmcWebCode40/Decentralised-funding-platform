import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useReach from "../../hooks/useReach";

const sleep = (milliseconds) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds));

const WaitingForAttacher = () => {
	const { contractInfo } = useReach();

	const copyToClipboard = async (button) => {
		navigator.clipboard.writeText(contractInfo);
		const origInnerHTML = button.innerHTML;
		button.innerHTML = "Copied!";
		button.disabled = true;
		await sleep(1000);
		button.innerHTML = origInnerHTML;
		button.disabled = false;
	};
	return (
		<Box
			sx={{
				margin: 5,
			}}
		>
			<Typography
				variant='caption'
				sx={{
					fontWeight: 600,
					display: "block",
				}}
			>
				Please give contributors this contract info:
			</Typography>
			<Box
				component='pre'
				sx={{
					background: "#f3f3f3",
					color: "#000",
					width: "100%",
					height: "7rem",
					borderRadius: 3,
					margin: "1rem auto",
					padding: 1,
					border: "2px solid #ccc",
				}}
			>
				{contractInfo}
			</Box>
			<Box sx={{ marginY: 5 }}>
				<Button
					variant='contained'
					onClick={(e) => copyToClipboard(e.currentTarget)}
					color='success'
				>
					Copy to clipboard
				</Button>
			</Box>
		</Box>
	);
};

export default WaitingForAttacher;
