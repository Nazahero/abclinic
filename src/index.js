import { isAndroid, isIOS, isMobile} from 'react-device-detect';
import ReactDOM from 'react-dom/client';
import packageRu from "./lang/ru.json";
import packageEn from "./lang/en.json";
import packageUz from "./lang/uz.json";
import { ProjectProvider } from "./contexts/context";
import axios from './api/api';
import React from 'react';
import App from './App';


function redir(props) {
    return window.location = props.to;
}

if (window.location.pathname == "/admin") {
    redir({to: "http://localhost:3001/"});
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProjectProvider>
        <App key="0" ru={packageRu} en={packageEn} uz={packageUz} dentists={""} publications={[]} />
    </ProjectProvider>
);




if (isMobile) {
    document.getElementById('root').classList.add("mobile");
    if (isAndroid) {
        document.getElementById('root').classList.add("android");
    } else if (isIOS) {
        document.getElementById('root').classList.add("ios");
    }
}else {
    document.getElementById('root').classList.add("browser");
}

