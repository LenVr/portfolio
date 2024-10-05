import { LEFT, RIGHT } from "../../libraries/constants.js";
import { ViewEnhanced } from "../../view/viewEnhanced.js";


export class CharacterView extends ViewEnhanced {

    x = 50;
    speed = 25;
    movement;
    width = 10;

    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'characterAppearance';
        this.container.id = 'mainCharacter';

        this.container.style.position = 'absolute';
        this.container.style.left = this.x + 'px';

        this.addKeyboardControls();
    }

    addKeyboardControls() {
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
        document.addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    handleKeyDown(e) {
        switch (e.key) {
            case 'a':
            case 'A':
                this.left();
                break;
            case 'd':
            case 'D':
                this.right();
                break;
        }
    }

    handleKeyUp(e) {
        switch (e.key) {
            case 'a':
            case 'd':
            case 'A':
            case 'D':
                this.freeze();
                break;
        }
    }

    mobileButton(e) {
        switch (e) {
            case LEFT:
                this.left();
            case RIGHT:
                this.right();
        }
    }

    mobileButtonUp(e) {
        switch (e) {
            case LEFT:
            case RIGHT:
                this.freeze()
        }
    }

    left() {
        if (!this.movement) {
            this.movement = setInterval(() => {
                this.x -= this.speed;
                if (this.x < 0) {
                    this.x = 0;
                    this.moveLeft();
                    this.freeze();
                }
                this.container.style.left = this.x + "px";
                this.checkBounds();
            }, 20);
        }
    }

    right() {
        if (!this.movement) {
            this.movement = setInterval(() => {
                this.x += this.speed;
                const limit = document.body.clientWidth - this.width;
                if (this.x > limit) {
                    this.x = limit;
                    this.moveRight()
                    this.freeze();
                }

                this.container.style.left = this.x + "px";
                this.checkBounds();
            }, 20);
        }
    }

    freeze() {
        clearInterval(this.movement);
        this.movement = undefined;
    }

    moveRight() {
        this.controller.appManager.movementRightHandler()
    }

    moveLeft() {
        this.controller.appManager.movementLeftHandler()
    }

    checkBounds() {
        const characterRect = this.container.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        // Si el personaje se acerca al borde derecho
        if (characterRect.right > windowWidth * 0.8) {  // Ajusta el valor según el margen que quieras
            this.moveRight();  // Llamar al handler del PortfolioView para mover la pantalla
        }

        // Si el personaje se acerca al borde izquierdo
        if (characterRect.left < windowWidth * 0.2) {  // Ajusta el valor según el margen que quieras
            this.moveLeft();  // Llamar al handler del PortfolioView para mover la pantalla
        }
    }
}