import { LEFT, RIGHT } from "../../libraries/constants.js";
import { div, p } from "../../libraries/html.js";
import { ViewEnhanced } from "../../view/viewEnhanced.js";
import { CharacterController } from "../character/characterController.js";

export class PortfolioView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);

        this.container.className = 'portfolioController';
        this.character = new CharacterController(this, this.container);
        this.scrollAmount = 25;

        this.leftButton = div(this.container, { className: 'leftButton', onmousedown: this.onLeftButton.bind(this), onmouseup: this.upLeftButton.bind(this) })
        this.rightButton = div(this.container, { className: 'rightButton', onmousedown: this.onRightButton.bind(this), onmouseup: this.upRightButton.bind(this) })

        this.welcomeContainer = div(this.container, { className: 'welcomeContainer' })
        this.nameContainer = div(this.welcomeContainer, { className: 'nameContainer' })
        this.welcomeTitle = p(this.nameContainer, { className: 'welcomeTitle' });
        this.instructions = p(this.welcomeContainer, { className: 'instructions' });
        this.instructionsMobile = p(this.welcomeContainer, { className: 'instructionsMobile' });

        this.personalContainer = div(this.container, { className: 'personalContainer' });
        this.welcomeMsg = div(this.personalContainer, { className: 'welcomeMsg', textContent: 'Welcome' })
        this.aboutInformation = p(this.personalContainer, { className: 'aboutInformation', innerHTML: `I'm a passionate web developer based in Costa Rica <br> Someone whole LOVES technology and science, I also love <br> One Piece and Bikes, but I won't tell you my secrets` })

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

    onRightButton() {
        this.character.view.mobileButton(RIGHT)
    }

    onLeftButton() {
        this.character.view.mobileButton(LEFT)
    }

    upRightButton() {
        this.character.view.mobileButtonUp(RIGHT)
    }

    upLeftButton() {
        this.character.view.mobileButtonUp(LEFT)
    }

}