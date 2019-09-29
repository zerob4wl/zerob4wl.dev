import React from 'react';
import ReactDOM from 'react-dom';


export function Starter (element, eventManager) {
    
    eventManager.on('body.*', (newTime) => {
        console.log(newTime);
    });
    console.log(eventManager)

    ReactDOM.render(
        <div>
            <h1>Header 1</h1>
        </div>,
        element
    )
}