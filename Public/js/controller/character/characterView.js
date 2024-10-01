import { View } from "../../view/view.js";


export class CharacterView extends View {

    x = 50;
    speed = 25;
    movement;
    width = 3;

    constructor(controller, parent) {
        super(parent);
        this.controller = controller;
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

    left() {
        if (!this.movement) {
            this.movement = setInterval(() => {
                this.x -= this.speed;
                if (this.x < 0) {
                    this.x = 0;
                    this.controller.moveLeft();
                    this.freeze();
                }
                this.container.style.left = this.x + "px";
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
                    this.controller.moveRight()
                    this.freeze();
                }

                this.container.style.left = this.x + "px";
            }, 20);
        }
    }

    freeze() {
        clearInterval(this.movement);
        this.movement = undefined;
    }
}