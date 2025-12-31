import { Controller } from '../controller.js';
import { SoundView } from './soundView.js';

export class SoundController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new SoundView(this, parent);
    }
}