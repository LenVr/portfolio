import { div, h2, img, p } from '../../libraries/html.js';
import { ViewEnhanced } from '../../view/viewEnhanced.js';

export class SoundViewR extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'soundController';

        this.soundPortalContainerR = div(this.container, { className: 'soundPortalContainerR' })
        this.soundRImg = img(this.soundPortalContainerR, { className: 'soundRightSide', src: './Public/assets/soundRSide.png' })

    }
}