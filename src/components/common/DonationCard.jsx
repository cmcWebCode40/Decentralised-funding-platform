import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider } from "@mui/material";
import useReach from "../../hooks/useReach";
import ReachAPI from "../../api/reach";

export default function DonationCard() {
	const { donationData } = useReach();
	return (
		<Card sx={{ maxWidth: 345, minWidth: 350, maxHeight: 350 }}>
			<CardActionArea>
				<CardMedia
					component='img'
					height='140'
					image={donationData.imageUrl}
					alt='green iguana'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{donationData.donationTitle}
					</Typography>
					<Divider />
					<Typography gutterBottom variant='h6' component='div'>
						{donationData.targetAmount} {ReachAPI.standardUnit} Goal
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{donationData.description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
