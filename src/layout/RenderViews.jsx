import React from "react";
import useReach from "../hooks/useReach";
import AppLayouts from "./AppLayouts";

const RenderViews = (AppUI) => {
	const { views } = useReach();

	const View = AppUI[views.view];
	const content = <View />;

	return <AppLayouts>{content}</AppLayouts>;
};

export default RenderViews;
