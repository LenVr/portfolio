import { showProject } from "../index.js";
import { ASSISTANT, FACTURATION, MEMORY, PINPONG, WANO, CLOSE } from "../libs/constantes.js";
import { div } from "../libs/html.js";

const wano = document.getElementById('prj1');
const pingPong = document.getElementById('prj2');
const memory = document.getElementById('prj3');
const facturation = document.getElementById('prj4');
const assistant = document.getElementById('prj5');
const fadeContainer = document.getElementById('fadeContainer');



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

fadeContainer.addEventListener('click', () => {
    showProject(CLOSE);
});



export function closeContainer() {

    fadeContainer.innerHTML = '';
    fadeContainer.className = 'none';
    document.body.style.overflow = 'auto';
}

export function showWanoProject() {

    fadeContainer.className = 'fadeContainer';
    document.body.style.overflow = 'hidden';

    const elementContainer = div(fadeContainer, { className: 'elementContainer' });

}
