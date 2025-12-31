import { Controller } from '../controller.js';
import { SoundViewR } from './soundViewR.js';

export class SoundControllerR extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new SoundViewR(this, parent);
    }
}