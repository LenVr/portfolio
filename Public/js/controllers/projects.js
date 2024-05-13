import { showProject } from "../index.js";
import { ASSISTANT, FACTURATION, MEMORY, PINPONG, WANO, CLOSE } from "../libs/constantes.js";
import { button, div, i, img, p } from "../libs/html.js";

const wano = document.getElementById('prj1');
const pingPong = document.getElementById('prj2');
const memory = document.getElementById('prj3');
const facturation = document.getElementById('prj4');
const assistant = document.getElementById('prj5');



wano.addEventListener('click', () => {
    showProject(WANO);
});

pingPong.addEventListener('click', () => {
    showProject(PINPONG);
});

memory.addEventListener('click', () => {
    showProject(MEMORY);
});

facturation.addEventListener('click', () => {
    showProject(FACTURATION);
});

assistant.addEventListener('click', () => {
    showProject(ASSISTANT);
});


function createProjectContainer(projectName, text, imgSrc, btnTxt, identification) {
    const fade = div(document.body, { className: 'fadeContainer', id: 'fadeContainer' });
    const elementContainer = div(fade, { className: 'elementContainer' });
    const textContainer = div(elementContainer, { className: 'textContainer' });
    const imgContainer = div(elementContainer, { className: 'imgPrjContainer' });
    const equis = i(fade, { className: 'uil uil-times-circle', id: 'equisClose' });

    const projectTitle = p(textContainer, { textContent: projectName, className: 'prjTitle' })
    const projectText = p(textContainer, { textContent: text });
    const projectImg = img(imgContainer, { src: imgSrc })
    const btn = button(textContainer, { className: 'visitPrjBtn', textContent: btnTxt, id: identification })

    const equisId = document.getElementById('equisClose');
    equisId.addEventListener('click', () => {
        document.body.removeChild(fade);
        fade.removeChild(elementContainer);
        fade.removeChild(equis);
    });

    return { fade, elementContainer, equis };
}

export function showWanoProject() {
    const { fade, elementContainer, equis } = createProjectContainer('Wano', 'Wano is able to use OpenAI, that way users can use ChatGPT and ask questions or requests. It has a welcome system capable of welcoming new members to a Discord server.  ', '/Public/assets/WanoWeb.jpg', 'Visit project', 'wanoLink');
}

export function showPingPongProject() {
    const { fade, elementContainer, equis } = createProjectContainer('Ping Pong Game', `A retro-style ping pong video game in which you can challenge your friends or family on the same computer, in pure 80's style`, '/Public/assets/pinpongIcon.png', 'Visit project', 'pingPongLink');
}

export function showMemoryGame() {
    const { fade, elementContainer, equis } = createProjectContainer('Memory game', `A memory video game, it's good to train your mind! You can leave your mark because it has a scoring system`, '/Public/assets/memoryGameTitle.png', 'Visit project', 'memoryLink');
}

export function showFacturactionProject() {
    const { fade, elementContainer, equis } = createProjectContainer('Facturation System', 'A billing system made for an English academy', '/Public/assets/CALogo2.png', 'Private project');
}

export function showAssistantProject() {
    const { fade, elementContainer, equis } = createProjectContainer('Discord Bot Assistant', 'A Discord virtual assistant, capable of assisting teachers and students of a virtual academy. It can show the time, provide general information related to the academy', '/Public/assets/asistenteVirtual.png', 'Private project');
}