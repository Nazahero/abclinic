import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import services from "./services.json";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App services={services[0]} />
  </React.StrictMode>
);


