import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Money";

import Button from "@mui/material/Button";
import useReach from "../../hooks/useReach";

const DeployerOrAttacher = () => {
	const { seletParticipant, user } = useReach();

	return (
		<Box
			sx={{
				textAlign: "center",
				marginY: 5,
			}}
		>
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
						<ListItemText primary='Account Balance' secondary={user.balance} />
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
						onClick={() => seletParticipant("DonationForm")}
					>
						Seek Funds
					</Button>
				</Box>
				<Box sx={{ marginY: 5, marginX: 3 }}>
					<Button
						variant='contained'
						color='secondary'
						onClick={() => seletParticipant("AttachContract")}
					>
						Donate Funds
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default DeployerOrAttacher;
