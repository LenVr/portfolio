import { Controller } from "../controller.js";
import { SkillsView } from "./skillsView.js";


export class SkillsController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new SkillsView(this, parent);
    }
}