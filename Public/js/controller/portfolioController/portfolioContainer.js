import { Controller } from "../controller.js";
import { PortfolioView } from "./portfolioView.js";

export class PortfolioController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new PortfolioView(this, parent);
        window.clearInterval(this.timer);
        this.timer = 0;
        this.interval = window.setInterval(this.counter.bind(this), 1000);
    }

    moveRight() {
        console.log('movement desde Portfolio controller')
        this.view.moveRight()
    }

    moveLeft() {
        this.view.moveLeft()
    }

    counter() {
        this.timer += 1;
        if (this.timer === 5) {
            this.view.showContactContainer(this.timer)
        }
    }
} 