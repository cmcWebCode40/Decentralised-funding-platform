import React from "react";
import ReachContextProvider from "./ReachContext";
import ThemeContextProvider from "./ThemeContext";

const AppContextProvider = ({ children }) => {
	return (
		<ThemeContextProvider>
			<ReachContextProvider>{children}</ReachContextProvider>
		</ThemeContextProvider>
	);
};

export default AppContextProvider;
