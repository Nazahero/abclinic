import { createContext, useState } from "react";

const ProjectContext = createContext({});

export const ProjectProvider = ({ children }) => {
    const [info, setInfo] = useState({});

    return (
        <ProjectContext.Provider value={{info, setInfo}}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectContext;