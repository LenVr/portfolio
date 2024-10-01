import { Controller } from "../controller.js";
import { portfolioView } from "./portfolioView.js";

export class PortfolioController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new portfolioView(this, parent)
    }
} 