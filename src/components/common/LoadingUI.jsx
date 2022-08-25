import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useReach from "../../hooks/useReach";

const LoadingUI = () => {
	const { views } = useReach();
	return (
		<Box
			sx={{
				textAlign: "center",
			}}
		>
			<Typography
				variant='h5'
				sx={{
					fontWeight: 600,
					marginY: 5,
				}}
			>
				{views.message}
			</Typography>
			<Box sx={{ display: "flex", justifyContent: "center", margin: 4 }}>
				<CircularProgress />
			</Box>
		</Box>
	);
};

export default LoadingUI;
