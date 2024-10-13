import { div } from "../../libraries/html.js";
import { View } from "../../view/view.js";
import { Controller } from "./../controller.js"

export class ReturnController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new View(parent);
        this.view.container.className = 'returnController';
        this.backBtn = div(this.view.container, { className: "backBtn", onclick: this.onBackBtn.bind(this), innerHTML: "<---" });
        this.hideBackBtn()
    }

    hideBackBtn() {
        this.backBtn.classList.add('hidden')
    }

    showBackBtn() {
        this.backBtn.classList.remove('hidden')
    }

    onBackBtn() {
        this.appManager.delete()
    }
}