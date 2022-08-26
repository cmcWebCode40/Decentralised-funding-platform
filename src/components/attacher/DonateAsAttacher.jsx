import React from "react";
import { DonationCard } from "../common";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useReach from "../../hooks/useReach";
import ReachAPI from "../../api/reach";

const DonateAsAttacher = () => {
	const { contribute, isLoading } = useReach();
	const [open, setOpen] = React.useState(false);
	const [amount, setAmount] = React.useState(0);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const submitContribution = () => {
		handleClose();
		contribute(amount);
	};

	return (
		<Box
			sx={{
				margin: "auto",
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
				mt: 6,
			}}
		>
			<DonationCard />
			<Box sx={{ marginY: 5, marginX: 3 }}>
				<LoadingButton
					variant='contained'
					loading={isLoading}
					onClick={handleClickOpen}
				>
					Contribute
				</LoadingButton>
				<Dialog open={open} onClose={handleClose}>
					<DialogTitle>Donate Funds</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please ensure you have a sufficient balance to contribute
						</DialogContentText>
						<TextField
							autoFocus
							margin='dense'
							id='amount'
							label={`Amount in ${ReachAPI.standardUnit}`}
							type='text'
							onChange={(e) => setAmount(+e.target.value)}
							fullWidth
							variant='standard'
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
						<Button onClick={submitContribution}>Make Payment</Button>
					</DialogActions>
				</Dialog>
			</Box>
		</Box>
	);
};

export default DonateAsAttacher;
