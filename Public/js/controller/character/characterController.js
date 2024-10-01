import { AppManager } from "../../appManager.js";
import { Controller } from "../controller.js";
import { CharacterView } from "./characterView.js"

export class CharacterController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new CharacterView(this, parent)
    }

    moveLeft() {
        console.log('chc controller mv Left')
    }

    moveRight() {
        console.log('chc controller mv Right')
    }
}