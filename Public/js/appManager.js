import { PortfolioController } from "./controller/portfolioController/portfolioContainer.js";
import { DASHBLOCKS, MEMORYGAME, PINGPONG, WANO } from "./libraries/constants.js";
import { div } from "./libraries/html.js"

export class AppManager {
    constructor() {
        this.mainContainer = div(document.body, { className: 'mainContainer' });
        this.controllerContainer = div(this.mainContainer, { className: "controllerContainer" });
        this.portfolioContainer = new PortfolioController(this, this.controllerContainer);
        this.currentController = null;
    }

    onLinkButton(link) {
        switch (link) {
            case DASHBLOCKS:
                window.open('https://dashblocks-ec9be.web.app');
                break;
            case PINGPONG:
                window.open('https://lenvr.github.io/PingPongGame/');
                break;
            case MEMORYGAME:
                window.open('https://brandonvillalobosmemorygame.web.app');
                break;
            case WANO:
                window.open('https://lenvr.github.io/WanoWeb/');
                break;
            default:
                break;
        }
    }
}