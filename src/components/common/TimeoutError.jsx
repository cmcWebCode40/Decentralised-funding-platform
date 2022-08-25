import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactComponent as ErrorSvg } from "../../assets/error_message.svg";

const TimeOutError = () => {
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
				There's been a timeout. (Someone took too long.)
			</Typography>
			<ErrorSvg height={"200"} />
		</Box>
	);
};

export default TimeOutError;
