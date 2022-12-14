import React from "react";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";

const AppFooter = () => {
	return (
		<Box
			component='footer'
			sx={{
				textAlign: "center",
				marginTop: 3,
				position: "absolute",
				bottom: -4,
				width: "100%",
				height: "1.5rem",
			}}
		>
			<Box component='hr' />
			<Box
				sx={{
					marginTop: 2,
				}}
			>
				Developed with{" "}
				<FavoriteIcon
					color='error'
					sx={{
						marginBottom: -0.7,
					}}
				/>
				by{" "}
				<Typography
					variant='h6'
					noWrap
					component='a'
					href='https://github.com/cmcWebCode40'
					sx={{
						fontSize: 15,
						marginY: 3,
					}}
				>
					@cmcWebCode
				</Typography>
			</Box>

			<Box
				sx={{
					fontSize: 15,
					marginTop: 2,
				}}
			>
				Student on
				<Typography
					variant='h6'
					noWrap
					component='a'
					href='https://www.reach.sh/'
					sx={{
						fontSize: 15,
						marginX: 1,
					}}
				>
					Reach
				</Typography>
				Ascent 2 Bootcamp (2022)
			</Box>
		</Box>
	);
};

export default AppFooter;
