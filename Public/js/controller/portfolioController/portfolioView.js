import { View } from "../../view/view.js";
import { CharacterController } from "../character/characterController.js";

export class PortfolioView extends View {
    constructor(controller, parent) {
        super(parent);
        this.controller = controller;
        this.container.className = 'portfolioController';
        this.character = new CharacterController(this, this.container);

        this.scrollAmount = 50;
    }

    moveLeft() {
        console.log('Left')
        /* this.container.scrollLeft -= this.scrollAmount; */
    }

    moveRight() {
        console.log('Right')
        /* this.container.scrollLeft += this.scrollAmount; */
    }
}