import { ViewEnhanced } from "../../view/viewEnhanced.js";
import { div, h2, i, img, p } from "../../libraries/html.js";

export class SkillsView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'skillsController';

        this.mainSkillContainer = div(this.container, { className: 'skillsMainContainer' });
        this.skillsContainer = div(this.mainSkillContainer, { className: 'skillsContainer' });
        this.skill = h2(this.mainSkillContainer, { className: 'skillsTitle', textContent: 'My Skills' });

        this.figma = img(this.skillsContainer, { src: 'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white', className: 'imgSkills' })
        this.AdobeAnimate = img(this.skillsContainer, { src: 'https://img.shields.io/badge/Adobe_Animate-%23F24E1E.svg?style=for-the-badge&logo=adobe&logoColor=white', className: 'imgSkills' })

        this.AdobePhotoshop = img(this.skillsContainer, { src: 'https://img.shields.io/badge/Photoshop-%231572B6.svg?style=for-the-badge&logo=adobePhotoshop&logoColor=white', className: 'imgSkills' })
        this.javascript = img(this.skillsContainer, { src: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E', className: 'imgSkills' })

        this.python = img(this.skillsContainer, { src: 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54', className: 'imgSkills' })
        this.react = img(this.skillsContainer, { src: 'https://img.shields.io/badge/react-white?style=for-the-badge&logo=react&logoColor=lightBlue', className: 'imgSkills' })

        this.NextJs = img(this.skillsContainer, { src: 'https://img.shields.io/badge/NextJs-black?style=for-the-badge&logo=NextJs&logoColor=transparent', className: 'imgSkills' })
        this.nodeJs = img(this.skillsContainer, { src: 'https://img.shields.io/badge/NodeJs-gray?style=for-the-badge&logo=nodejs&logoColor=white', className: 'imgSkills' })

        this.discordJs = img(this.skillsContainer, { textContent: 'discordJs', className: 'imgSkills' })
        this.githubVs = img(this.skillsContainer, { src: 'https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white', className: 'imgSkills' })
        this.gitVersionControl = img(this.skillsContainer, { src: 'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white', className: 'imgSkills' })

        this.bootstrap = img(this.skillsContainer, { src: 'https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white', className: 'imgSkills' });
        this.tailwind = img(this.skillsContainer, { src: 'https://img.shields.io/badge/tailwind-white?style=for-the-badge&logo=tailwind&logoColor=blue', className: 'imgSkills' });
        this.css = img(this.skillsContainer, { src: 'https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', className: 'imgSkills' });
    }
}