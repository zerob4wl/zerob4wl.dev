import "./style/index.scss";
import Apper from "./scripts/index";

Apper.init({});
Apper.addMicroApp({
    name: 'header',
    app : import("./apps/header"), 
    element: document.createElement('h1')
});
Apper.addMicroApp({
    name: 'body',
    app : import("./apps/body/body"), 
    element: document.createElement('div')
});


