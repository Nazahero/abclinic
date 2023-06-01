import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import packageRu from "./ru.json";
import packageEn from "./en.json";
import packageUz from "./uz.json";
import categories from "./categories.json";
import publications from "./publications.json";
import { isAndroid, isDesktop, isIOS, isMobile, isWindows } from 'react-device-detect';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App ru={packageRu} en={packageEn} uz={packageUz} categories={categories} publications={publications} />);

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

