import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import packageRu from "./ru.json";
import packageEn from "./en.json";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App ru={packageRu} en={packageEn} />)  