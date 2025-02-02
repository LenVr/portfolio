import { CONTACTME, DASHBLOCKS, LEFT, MEMORYGAME, PINGPONG, RIGHT, SERVICEAPP, TICTAC, WANO } from "../../libraries/constants.js";
import { div, h2, i, img, p } from "../../libraries/html.js";
import { ViewEnhanced } from "../../view/viewEnhanced.js";
import { CharacterController } from "../character/characterController.js";
import { ProfileContentController } from "../profileContent/profileContentController.js";
import { ServicesController } from "../servicesController/serviceController.js";
import { SkillsController } from "../skillsController/skillsController.js";

export class PortfolioView extends ViewEnhanced {
    constructor(controller, parent) {
        super(controller, parent);

        this.container.className = 'portfolioController';
        this.character = new CharacterController(this, this.container);
        this.scrollAmount = 25;

        /* Div to style cursos */
        this.cursor = div(this.container, { className: 'cursor' })
        this.cursorMovement()

        /* Saying HI message */
        this.welcomeContainer = div(this.container, { className: 'welcomeContainer' })
        this.nameContainer = div(this.welcomeContainer, { className: 'nameContainer' })
        this.welcomeTitle = p(this.nameContainer, { className: 'welcomeTitle' });
        this.instructions = p(this.welcomeContainer, { className: 'instructions' });
        this.instructionsMobile = p(this.welcomeContainer, { className: 'instructionsMobile' });

        /* About me information */
        this.aboutInformation = new ProfileContentController(this, this.container);


        /* projects */

        this.mainProjectsContainer = div(this.container, { className: 'mainProjectsContainer' });
        this.mainProjectTitle = h2(this.mainProjectsContainer, { className: 'mainProjectTitle', textContent: 'My projects' });

        this.projectsContainerOne = div(this.mainProjectsContainer, { className: 'projectsContainerOne' });
        this.projectsContainerTwo = div(this.mainProjectsContainer, { className: 'projectsContainerTwo' });
        this.projectsContainerThree = div(this.mainProjectsContainer, { className: 'projectsContainerThree' });

        this.dashBlocksContent = div(this.projectsContainerOne, { className: 'project' });
        this.dashBlocksTitle = p(this.dashBlocksContent, { className: 'projectTitle', textContent: 'Dash_Blocks' })
        this.dashBlocksInfo = p(this.dashBlocksContent, { className: 'projectInfo', innerHTML: 'This is a game which was created using JS, CSS, HTML and <br>firebase services. Following the paradigm object oriented programming (OOP).' })
        this.dashBlocksButton = div(this.dashBlocksContent, { className: 'projectButton', textContent: 'Visit', onclick: this.onDashBlocks.bind(this) })

        this.andreaBotContent = div(this.projectsContainerOne, { className: 'project' });
        this.andreaBotTitle = p(this.andreaBotContent, { className: 'projectTitle', textContent: 'Andrea Virtual Assistant' });
        this.andreaBotInfo = p(this.andreaBotContent, { className: 'projectInfo', innerHTML: 'This assistant services an English academy, It assists teachers, students and  <BR> management in the daily basis. It was created using JS, DiscordJs and NodeJs.' });
        this.andreaBotButton = div(this.andreaBotContent, { className: 'notAvailableBtn', textContent: 'Staff only' })

        this.pingPongContent = div(this.projectsContainerOne, { className: 'project' });
        this.pingPongTitle = p(this.pingPongContent, { className: 'projectTitle', textContent: 'Ping Pong Game' });
        this.pingPongInfo = p(this.pingPongContent, { className: 'projectInfo', innerHTML: 'This is a very fun game to play 1v1 in your local PC, also created following <br >the OOP using JS, CSS and HTML.' });
        this.pingPongButton = div(this.pingPongContent, { className: 'projectButton', textContent: 'Visit', onclick: this.onPingPong.bind(this) })

        this.memoryGameContent = div(this.projectsContainerTwo, { className: 'project' });
        this.memoryGameTitle = p(this.memoryGameContent, { className: 'projectTitle', textContent: 'Memory Game' });
        this.memoryGameInfo = p(this.memoryGameContent, { className: 'projectInfo', innerHTML: 'This is a memory game that was created following OOP, using JS, HTML, CSS and <br> Firebase as its database.' });
        this.memoryGameButton = div(this.memoryGameContent, { className: 'projectButton', textContent: 'Visit', onclick: this.onMemoryGame.bind(this) })

        this.wanoBotContent = div(this.projectsContainerTwo, { className: 'project' });
        this.wanoBotTitle = p(this.wanoBotContent, { className: 'projectTitle', textContent: 'Wano Bot' });
        this.wanoBotInfo = p(this.wanoBotContent, { className: 'projectInfo', innerHTML: 'This is a Discord Bot which integrates a welcome system and ChatGPT to interact <br> with the users of the server where is invited.' });
        this.wanoBotButton = div(this.wanoBotContent, { className: 'projectButton', textContent: 'Visit', onclick: this.onWano.bind(this) });

        this.billingSystemContent = div(this.projectsContainerTwo, { className: 'project' });
        this.billingSystemTitle = p(this.billingSystemContent, { className: 'projectTitle', textContent: 'Billing System' });
        this.billingSystemInfo = p(this.billingSystemContent, { className: 'projectInfo', innerHTML: `This is a billin system made for an English Academy. Generates invoices and manage the students` });
        this.billingSystemButton = div(this.billingSystemContent, { className: 'notAvailableBtn', textContent: 'Staff only' })

        this.serviceApp = div(this.projectsContainerThree, { className: 'project' });
        this.serviceAppTitle = p(this.serviceApp, { className: 'projectTitle', textContent: 'MyService' });
        this.serviceAppInfo = p(this.serviceApp, { className: 'projectInfo', innerHTML: 'This is a platform where you can publish the services that you offer, it was <br> created using React, NextJs and Firebase.' });
        this.serviceAppButton = div(this.serviceApp, { className: 'projectButton', textContent: 'Visit', onclick: this.onServiceApp.bind(this) });

        this.ticTacToe = div(this.projectsContainerThree, { className: 'project' });
        this.ticTacToeTitle = p(this.ticTacToe, { className: 'projectTitle', textContent: 'TicTacToe' });
        this.ticTacToeInfo = p(this.ticTacToe, { className: 'projectInfo', innerHTML: `This is a funny and classic TicTacToe that was created using JS, HTML and CSS, the online-multiplayer <br> version is coming soon.` });
        this.ticTacToeButton = div(this.ticTacToe, { className: 'projectButton', textContent: 'Visit', onclick: this.onTicTac.bind(this) })

        /* Skill container */

        this.skills = new SkillsController(this, this.container);

        /* My services offered */

        this.servicesOffered = new ServicesController(this, this.container);

        /* left and right button for mobiles to move from left to right and viceversa */
        this.leftButton = div(this.container, { className: 'leftButton', ontouchstart: this.onLeftButton.bind(this), ontouchend: this.upLeftButton.bind(this) })
        this.rightButton = div(this.container, { className: 'rightButton', ontouchstart: this.onRightButton.bind(this), ontouchend: this.upRightButton.bind(this) })

        this.contactMeController = null;


        this.writing = true;
        this.index = 0
        setInterval(() => this.writer(), 250);
    }

    movementRightHandler() {
        this.container.scrollLeft += this.scrollAmount;
    }

    movementLeftHandler() {
        this.container.scrollLeft -= this.scrollAmount;
    }

    writer() {
        let phrase = `Hi! I'm Len :)`;
        if (this.writing) {
            if (this.index < phrase.length) {
                this.welcomeTitle.textContent += phrase[this.index];
                this.index++;
            } else {
                this.writing = false;
            }
        } else {
            this.welcomeTitle.textContent = '';
            this.index = 0;
            this.writing = true;
            this.instructions.innerHTML = 'Press <kbd>A</kbd> or <kbd>D</kbd> to move';
            this.instructionsMobile.innerHTML = 'If you are in a mobile, touch the border left or right'
        }
    }

    onRightButton() {
        this.character.view.mobileButton(RIGHT)
    }

    onLeftButton() {
        this.character.view.mobileButton(LEFT)
    }

    upRightButton() {
        this.character.view.mobileButtonUp(RIGHT)
    }

    upLeftButton() {
        this.character.view.mobileButtonUp(LEFT)
    }

    cursorMovement() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = `${e.pageX}px`;
            this.cursor.style.top = `${e.pageY}px`;
        });
    }

    onDashBlocks() {
        this.controller.appManager.onLinkButton(DASHBLOCKS)
    }
    onPingPong() {
        this.controller.appManager.onLinkButton(PINGPONG)
    }
    onMemoryGame() {
        this.controller.appManager.onLinkButton(MEMORYGAME)
    }
    onWano() {
        this.controller.appManager.onLinkButton(WANO)
    }
    onServiceApp() {
        this.controller.appManager.onLinkButton(SERVICEAPP)
    }
    onTicTac() {
        this.controller.appManager.onLinkButton(TICTAC)
    }

    showContactContainer(timer) {
        this.contactMeContainer = div(this.container, { className: 'contactMeContainer', innerHTML: 'CONTACT ME', onclick: this.onContactMeBtn.bind(this) });
    }

    onContactMeBtn() {
        this.controller.appManager.showController(CONTACTME)
    }
}