import { ViewEnhanced } from "../../view/viewEnhanced.js"
import { ReturnController } from "../returnController/returnController.js";

export class ContactMeView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'contactMeController';
        this.backBtn = new ReturnController(this, this.container);
    }
}