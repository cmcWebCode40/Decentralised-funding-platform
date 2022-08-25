import { ToastContainer } from "react-toastify";
import * as AuthViews from "./components/auth";
import * as AttacherViews from "./components/attacher";
import * as DeployerView from "./components/deployer";

import * as ShareUI from "./components/common";
import RenderViews from "./layout/RenderViews";

import "react-toastify/dist/ReactToastify.css";

const AppViews = {
	...AuthViews,
	...AttacherViews,
	...DeployerView,
	...ShareUI,
};

const App = () => {
	return (
		<>
			<ToastContainer />
			<RenderViews {...AppViews} />
		</>
	);
};

export default App;
