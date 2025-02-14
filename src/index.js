import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/demo/demo.css";


import Index from "./views/Index.js";
import LandingPage from "./views/examples/LandingPage.js";
import RegisterPage from "./views/examples/RegisterPage.js";
import ProfilePage from "./views/examples/ProfilePage.js";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
