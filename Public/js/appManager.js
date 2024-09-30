import { div } from "./libraries/html.js"

export class AppManager {
    constructor() {
        this.mainContainer = div(document.body, { className: 'mainContainer' });
        this.controllerContainer = div(this.mainContainer, { className: "controllerContainer" });
        this.currentController = null;
    }
}