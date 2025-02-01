import { Controller } from "../controller.js";
import { ProfileContentView } from "./profileContentView.js";

export class ProfileContentController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new ProfileContentView(this, parent);
    }
}