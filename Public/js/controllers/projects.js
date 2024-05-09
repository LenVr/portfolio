import { showProject } from "../index.js";
import { ASSISTANT, FACTURATION, MEMORY, PINPONG, WANO } from "../libs/constantes.js";
import { div } from "../libs/html.js";

const wano = document.getElementById('prj1');
const pingPong = document.getElementById('prj2');
const memory = document.getElementById('prj3');
const facturation = document.getElementById('prj4');
const assistant = document.getElementById('prj5');
const modalContainer = document.getElementById('modalContainer')



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

export function showWanoProject() {

    const fade = div(modalContainer, { className: 'fade' });
    const elementContainer = div(fade, { className: 'elementContainer' });

}
