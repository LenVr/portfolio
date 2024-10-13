import { div } from "../libraries/html.js";
import { View } from "./view.js";

export class ViewEnhanced extends View {
    constructor(controller, parent) {
        super(parent);
        this.controller = controller;
    }
}