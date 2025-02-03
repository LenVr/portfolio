import { div, h2, p } from '../../libraries/html.js';
import { ViewEnhanced } from '../../view/viewEnhanced.js';

export class ServiceView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'servicesController';

        this.contentContainer = div(this.container, { className: 'contentContainer' });
        this.title = h2(this.contentContainer, { className: 'title', textContent: 'My Services' });
        this.servicesContainer = div(this.contentContainer, { className: 'servicesContainer' });
        this.service = p(this.servicesContainer, { className: 'service', textContent: 'Web development and design' });
        this.service = p(this.servicesContainer, { className: 'service', textContent: 'UI/UX Design' });
        this.service = p(this.servicesContainer, { className: 'service', textContent: 'Web maintenance' });
        this.service = p(this.servicesContainer, { className: 'service', textContent: 'SEO Optimization' });

    }
}