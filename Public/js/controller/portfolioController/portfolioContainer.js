import { Controller } from "../controller.js";
import { PortfolioView } from "./portfolioView.js";

export class PortfolioController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new PortfolioView(this, parent)
    }

    moveRight() {
        this.view.moveRight()
    }

    moveLeft() {
        this.view.moveLeft()
    }
} 