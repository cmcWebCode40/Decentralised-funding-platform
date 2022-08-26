import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Money";

import Button from "@mui/material/Button";
import useReach from "../../hooks/useReach";
import { toast } from "react-toastify";
import ReachAPI from "../../api/reach";
import { Alert } from "@mui/material";
import {
	ATTACH_CONTRACT_VIEW,
	DONATOION_FORM_VIEW,
} from "../../constants/index";

const SelectUser = () => {
	const { seletParticipant, user, fundRaisingAlert, setUser } = useReach();
	const [isLoading, setIsLoading] = useState(false);

	const getBalance = async () => {
		setIsLoading(true);
		try {
			const balance = await ReachAPI.getbalance(ReachAPI.user.account);
			setUser({
				...user,
				balance: `${balance} ${ReachAPI.standardUnit}`,
			});
		} catch (error) {
			console.log(error);
			toast.error(`Error fetching account balance,`, { toastId: "Error" });
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getBalance();
	}, []);

	return (
		<Box
			sx={{
				textAlign: "center",
				marginY: 5,
			}}
		>
			{fundRaisingAlert.open && (
				<Alert severity={fundRaisingAlert.type}>
					{fundRaisingAlert.message}
				</Alert>
			)}
			<Box
				sx={{
					display: "flex",
					flexFlow: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<List
					sx={{
						bgcolor: "background.paper",
					}}
				>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<ImageIcon />
							</Avatar>
						</ListItemAvatar>
						{isLoading ? (
							`Fetching Account Balance....`
						) : (
							<ListItemText
								primary='Account Balance'
								secondary={user.balance}
							/>
						)}
					</ListItem>
				</List>
			</Box>

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
						onClick={() => seletParticipant(DONATOION_FORM_VIEW)}
					>
						Seek Funds
					</Button>
				</Box>
				<Box sx={{ marginY: 5, marginX: 3 }}>
					<Button
						variant='contained'
						color='secondary'
						onClick={() => seletParticipant(ATTACH_CONTRACT_VIEW)}
					>
						Donate Funds
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default SelectUser;
