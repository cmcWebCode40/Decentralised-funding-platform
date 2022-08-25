import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../themes";

const ThemeContextProvider = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContextProvider;
