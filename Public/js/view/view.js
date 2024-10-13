import { div } from "./../libraries/html.js"

export class View {
    constructor(parent, controller) {
        this.controller = controller;
        this.parent = parent;
        this.container = div(parent, null)
    }

    delete() {
        this.parent.removeChild(this.container)
    }
}