import MicroApp from "./MicroApp";

class MicroAppManager {
    
    constructor(root){
        this._root = root;
        this._apps = {};
    };

    initMicroApp ({name, app, element = document.createElement('div')}) {
        const microApp = new MicroApp({ app, element });
        this._root.appendChild(element);
        this._addAppToApps({name, microApp});
        return microApp;
    }

    _addAppToApps ({name, microApp}) {
        if (this._apps[name] !== undefined) {
            throw new Error(`${name} initilized before.`);
        }
        this._apps[name] = microApp;
    };

    getMicroApp(name) {
        return this._apps[name];
    }

}

export default MicroAppManager;