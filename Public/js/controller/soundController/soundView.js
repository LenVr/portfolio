import { div, h2, img, p } from '../../libraries/html.js';
import { ViewEnhanced } from '../../view/viewEnhanced.js';

export class SoundView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'soundController';

        this.soundPortalContainerL = div(this.container, { className: 'soundPortalContainerL' })
        this.soundLImg = img(this.soundPortalContainerL, { className: 'soundLeftSide', src: './Public/assets/soundLSide.png' })
    }
}