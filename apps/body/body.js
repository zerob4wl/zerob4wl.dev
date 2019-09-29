import React from 'react';
import ReactDOM from 'react-dom';

import "./style.scss";
import App from "./index.jsx";

export function Starter (element, eventManager) {
    ReactDOM.render(
        <App eventManager={eventManager}/>,
        element
    )
}