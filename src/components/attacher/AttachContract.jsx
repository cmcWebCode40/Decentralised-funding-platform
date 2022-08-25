import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useReach from "../../hooks/useReach";

const AttachContract = () => {
	const [ctcInfoStr, setCtcInfoStr] = useState("");
	const { attachContract } = useReach();
	return (
		<Box
			sx={{
				textAlign: "center",
				maxWidth: "60%",
				marginX: "auto",
			}}
		>
			<Typography
				variant='h5'
				sx={{
					fontWeight: 600,
					marginTop: 7,
				}}
			>
				Please paste the contract info here:
			</Typography>
			<TextField
				label='Enter contract information'
				id='filled-start-adornment'
				fullWidth
				multiline
				rows='6'
				sx={{
					marginY: 1,
				}}
				onChange={(e) => setCtcInfoStr(e.currentTarget.value)}
				variant='outlined'
			/>
			<Box sx={{ marginY: 5 }}>
				<Button
					variant='contained'
					disabled={!ctcInfoStr}
					onClick={() => attachContract(ctcInfoStr)}
					color='success'
				>
					Attach Contract
				</Button>
			</Box>
		</Box>
	);
};

export default AttachContract;
