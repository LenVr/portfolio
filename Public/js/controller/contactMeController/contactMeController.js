import { Controller } from "../controller.js"
import { ContactMeView } from "./contactMeView.js";


export class ContactMeController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new ContactMeView(this, parent)
    }
}