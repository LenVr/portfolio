import { showProject } from "../index.js";
import { CONTACT } from "../libs/constantes.js";
import { div, i } from "../libs/html.js";

const contactbtn = document.getElementById('contactBtnTop');
const sendMeMessage = document.getElementById('sendMessageBtn');

contactbtn.addEventListener('click', () => {
    showProject(CONTACT);
})

export function showContactForm() {

    const fade = div(document.body, { className: 'fadeContainer' });
    const contactFormContainer = div(fade, { className: 'contactFormContainer' });
    const equis = i(fade, { className: 'uil uil-times-circle', id: 'equisClose' });

    const equisId = document.getElementById('equisClose');
    equisId.addEventListener('click', () => {
        document.body.removeChild(fade);
        fade.removeChild(elementContainer);
        fade.removeChild(equis);
    });
}


