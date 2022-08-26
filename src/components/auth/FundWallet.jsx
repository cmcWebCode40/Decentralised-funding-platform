import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useReach from "../../hooks/useReach";

const FundWallet = () => {
	const { user, standardUnit, defaultFundAmt, fundAccount, skipFundAccount } =
		useReach();
	const [amount, setAmount] = useState({ amt: defaultFundAmt });
	return (
		<Box
			sx={{
				textAlign: "center",
				maxWidth: "60%",
				marginX: "auto",
			}}
		>
			<Typography
				variant='h4'
				sx={{
					fontWeight: 600,
					marginY: 5,
				}}
			>
				Fund account
			</Typography>
			<Typography
				variant='caption'
				sx={{
					fontWeight: 600,
					marginY: 5,
				}}
			>
				Balance: {user.balance} {standardUnit}
				<br />
				Would you like to fund your account with additional {standardUnit}?
				(This only works on certain devnets)
			</Typography>
			<TextField
				label='With normal TextField'
				id='filled-start-adornment'
				fullWidth
				sx={{
					marginY: 1,
				}}
				variant='outlined'
				placeholder={defaultFundAmt}
				onChange={(e) => setAmount({ amt: e.currentTarget.value })}
			/>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Box sx={{ marginY: 5, marginX: 3 }}>
					<Button
						variant='contained'
						color='primary'
						onClick={() => fundAccount(amount)}
					>
						Fund wallet
					</Button>
				</Box>
				<Box sx={{ marginY: 5, marginX: 3 }}>
					<Button variant='contained' color='success' onClick={skipFundAccount}>
						Skip Funding
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default FundWallet;
