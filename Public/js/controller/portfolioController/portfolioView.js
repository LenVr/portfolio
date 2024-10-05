import { div, p } from "../../libraries/html.js";
import { ViewEnhanced } from "../../view/viewEnhanced.js";
import { CharacterController } from "../character/characterController.js";

export class PortfolioView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);

        this.container.className = 'portfolioController';
        this.character = new CharacterController(this, this.container);
        this.scrollAmount = 25;

        this.welcomeContainer = div(this.container, { className: 'welcomeContainer' })
        this.welcomeTitle = p(this.welcomeContainer, { className: 'welcomeTitle' });
        this.instructions = p(this.welcomeContainer, { className: 'instructions' })
        this.instructionsMobile = p(this.welcomeContainer, { className: 'instructionsMobile' })

        this.writing = true;
        this.index = 0
        setInterval(() => this.writer(), 250);
    }

    movementRightHandler() {
        this.container.scrollLeft += this.scrollAmount;
    }

    movementLeftHandler() {
        this.container.scrollLeft -= this.scrollAmount;
    }

    writer() {
        let phrase = `Hi! I'm Len :)`;
        if (this.writing) {
            if (this.index < phrase.length) {
                this.welcomeTitle.textContent += phrase[this.index];
                this.index++;
            } else {
                this.writing = false;
            }
        } else {
            this.welcomeTitle.textContent = '';
            this.index = 0;
            this.writing = true;
            this.instructions.innerHTML = 'Press <kbd>A</kbd> and <kbd>D</kbd> to move';
            this.instructionsMobile.innerHTML = 'If you are in a mobile, touch the border left or right'
        }
    }
}