class MicroApp {
    constructor({app, element, eventManager}){
        this._app = app;
        this._element = element;
        this._eventManager = eventManager;
    }

    render(string) {
        this._element.innerHTML = string;
    }

    async start() {
        const app = await this._app;
        app.Starter(this._element, this._eventManager);
    }
}

export default MicroApp;