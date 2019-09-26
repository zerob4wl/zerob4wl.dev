import React from 'react';
import ReactDOM from 'react-dom';

import "./style.scss";
import App from "./index.jsx";

export function Starter (microApp) {
    ReactDOM.render(
        <App/>,
        microApp.element
    )
}