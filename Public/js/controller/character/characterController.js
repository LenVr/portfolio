import { Controller } from "../controller.js";
import { CharacterView } from "./characterView.js"

export class CharacterController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new CharacterView(this, parent)
    }
}