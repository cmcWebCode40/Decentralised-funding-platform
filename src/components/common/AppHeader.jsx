import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/People";
import Chip from "@mui/material/Chip";

import useReach from "../../hooks/useReach";

const commonStyles = {
	mr: 2,
	display: { xs: "none", md: "flex" },
	fontFamily: "monospace",
	fontWeight: 700,
	letterSpacing: ".3rem",
	color: "white",
	textDecoration: "none",
};
const AppHeader = () => {
	const { user } = useReach();

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<AdbIcon
						color='#fff'
						sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "#fff" }}
					/>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={commonStyles}
					>
						SEEK FUNDS
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
					<Box sx={{ flexGrow: 0 }}>
						{user?.address && (
							<Typography variant='caption' noWrap sx={commonStyles}>
								<Chip
									sx={{
										color: "#fff",
									}}
									label={user.address}
								/>
							</Typography>
						)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default AppHeader;
