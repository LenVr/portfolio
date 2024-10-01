import { View } from "../../view/view.js";

export class portfolioView extends View {
    constructor(controller, parent) {
        super(parent);
        this.controller = controller;
        this.container.className = 'portfolioController';
    }
}