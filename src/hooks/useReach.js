import { useContext } from "react";
import { ReachContext } from "../context/ReachContext";

const useReach = () => {
	return useContext(ReachContext);
};

export default useReach;
