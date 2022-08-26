import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#66bb6a",
		},
		secondary: {
			main: "#ffa726",
		},
		error: {
			main: "#ba1a1a",
		},
	},
	typography: {
		fontFamily: ["Sora", "sans-serif"].join(","),
	},
});
