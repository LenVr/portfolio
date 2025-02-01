import { div, img, p } from "../../libraries/html.js";
import { ViewEnhanced } from "../../view/viewEnhanced.js";

export class ProfileContentView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'profileContentView';

        this.aboutMeContainer = div(this.container, { className: 'aboutMeContainer' });
        this.aboutMeImgContainer = div(this.aboutMeContainer, { className: 'aboutMeImgContainer' });
        this.aboutMeImg = img(this.aboutMeImgContainer, { className: 'aboutMeImg', src: './Public/assets/profPicture.webp' })

        this.aboutMeTextContainer = div(this.aboutMeContainer, { className: 'aboutMeTextContainer' })
        this.welcomeMsg = div(this.aboutMeTextContainer, { className: 'welcomeMsg', textContent: 'Welcome' });
        this.aboutInformation = p(this.aboutMeTextContainer, { className: 'aboutInformation', innerHTML: `I'm a passionate developer based in Costa Rica <br> Someone who LOVES videogames, technology and science, I also <br> love One Piece and Bikes, but I won't tell you <br> more of my secrets.` });
    }
}