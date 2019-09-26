class MicroApp {
    constructor({app, element}){
        this.app = app;
        this.element = element;
    }

    render(string) {
        this.element.innerHTML = string;
    }

    async start() {
        const app = await this.app;
        app.Starter(this);
    }
}

export default MicroApp;