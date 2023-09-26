import ProjectContext from "../contexts/context";
import { useContext } from "react";

export const usePackage = () => {
    return useContext(ProjectContext);
}