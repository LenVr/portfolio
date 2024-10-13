import { div, i, h2, a, p } from "../../libraries/html.js";
import { ViewEnhanced } from "../../view/viewEnhanced.js"
import { ReturnController } from "../returnController/returnController.js";

export class ContactMeView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'contactMeController';
        this.backBtn = new ReturnController(this, this.container);

        this.counter = 0;

        this.titlContact = h2(this.container, { innerHTML: 'Contact links & details' })
        this.cube = div(this.container, { className: 'cube' });
        this.frontFace = div(this.cube, { classList: 'face front' });
        this.githubIcon = a(this.frontFace, { classList: 'fa-brands fa-github icon', href: 'https://github.com/LenVr', target: '_blank' })
        this.backFace = div(this.cube, { classList: 'face back' });
        this.linkedInIcon = a(this.backFace, { classList: 'fa-brands fa-linkedin icon', href: "https://www.linkedin.com/in/brandon-l-villalobos-rojas-8a5172220/", target: "_blank" })
        this.leftFace = div(this.cube, { classList: 'face left' });
        this.mailIcon = a(this.leftFace, { classList: 'fa-solid fa-envelope icon', href: "mailto:villalobosrojas22@gmail.com?subject=I'm%20interested%20on%20it" })
        this.emailAddress = p(this.leftFace, { className: ' contactText', textContent: 'villalobosrojas22@gmail.com', onclick: this.onCopyText.bind(this) });
        this.rightFace = div(this.cube, { classList: 'face right' });
        this.topFace = div(this.cube, { classList: 'face top' });
        this.bottomFace = div(this.cube, { classList: 'face bottom' });
    }

    onCopyText() {
        navigator.clipboard.writeText(this.emailAddress.innerText);
        this.alertDiv = div(this.container, { className: 'alert', textContent: 'email address copied!' });

        this.interval = setInterval(() => {
            this.counter++;
            if (this.counter >= 7) {
                this.alertDiv.remove();
                clearInterval(this.interval)
            }
        }, 1000)
    }
}