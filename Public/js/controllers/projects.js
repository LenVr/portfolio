import { showProject } from "../index.js";
import { ASSISTANT, FACTURATION, MEMORY, PINPONG, WANO, CLOSE } from "../libs/constantes.js";
import { div, i, img, p } from "../libs/html.js";

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


function createProjectContainer(projectName, text, imgSrc) {
    const fade = div(document.body, { className: 'fadeContainer', id: 'fadeContainer' });
    const elementContainer = div(fade, { className: 'elementContainer' });
    const equis = i(fade, { className: 'uil uil-times-circle', id: 'equisClose' });

    const projectTitle = p(elementContainer, { textContent: projectName })
    const projectText = p(elementContainer, { textContent: text });
    const projectImg = img(elementContainer, { src: imgSrc })

    const equisId = document.getElementById('equisClose');
    equisId.addEventListener('click', () => {
        document.body.removeChild(fade);
        fade.removeChild(elementContainer);
        fade.removeChild(equis);
    });

    return { fade, elementContainer, equis };
}

export function showWanoProject() {
    const { fade, elementContainer, equis } = createProjectContainer('Wano', 'Texto para el proyecto Wano', '/Public/assets/WanoWeb.jpg');
}

export function showPingPongProject() {
    const { fade, elementContainer, equis } = createProjectContainer('Ping Pong', 'Texto para el proyecto Ping Pong');
}

export function showMemoryGame() {
    const { fade, elementContainer, equis } = createProjectContainer('Memory Game', 'Texto para el juego de memoria');
}

export function showFacturactionProject() {
    const { fade, elementContainer, equis } = createProjectContainer('Facturación', 'Texto para el proyecto de facturación');
}

export function showAssistantProject() {
    const { fade, elementContainer, equis } = createProjectContainer('Assistant', 'Texto para el proyecto Assistant');
}