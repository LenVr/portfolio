import { showProject } from "../index.js";
import { WANO } from "../libs/constantes.js";

const wano = document.getElementById('prj1');
const pingPong = document.getElementById('prj2');
const memory = document.getElementById('prj3');
const facturation = document.getElementById('prj4');
const assistant = document.getElementById('prj5');

wano.addEventListener('click', () => {
    console.log('wanoclickFct')
    showProject(WANO);
})
