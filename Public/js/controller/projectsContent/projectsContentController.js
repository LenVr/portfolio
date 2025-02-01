import { Controller } from "../controller.js";

export class ProjectsContentController extends Controller {
    constructor(appmanager, parent) {
        super(appmanager, parent);
        this.view = new ProjectContentView(this, parent);
    }
}