
export class Controller {
    constructor(appManager, parent) {
        this.appManager = appManager;
        this.service = null;
        this.view = null;
    }

    delete() {
        this.view.delete();
    }
}