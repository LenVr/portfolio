import { PortfolioController } from "./controller/portfolioController/portfolioContainer.js";
import { div } from "./libraries/html.js"

export class AppManager {
    constructor() {
        this.mainContainer = div(document.body, { className: 'mainContainer' });
        this.controllerContainer = div(this.mainContainer, { className: "controllerContainer" });
        this.portfolioContainer = new PortfolioController(this, this.controllerContainer);
        this.currentController = null;
    }
}