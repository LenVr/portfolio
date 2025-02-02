import { Controller } from '../controller.js';
import { ServiceView } from './servicesView.js';

export class ServicesController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new ServiceView(this, parent);
    }
}