import { showProject } from "../index.js";
import { CONTACT } from "../libs/constantes.js";
import { div, i } from "../libs/html.js";

const contactbtn = document.getElementById('contactBtnTop');
const sendMeMessage = document.getElementById('sendMessageBtn');

contactbtn.addEventListener('click', () => {
    showProject(CONTACT);
})

sendMeMessage.addEventListener('click', () => {
    window.open('https://walink.co/768291', '_blank');
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
    const email = 'lenzvinsmoke@gmail.com'

    contactFormContainer.innerHTML = `
        <form action="https://formsubmit.co/${email}" method="POST">
            <p>Full name</p>
            <input id="name" type="text" required>
            <p>Company</p>
            <input id="company" type="text">
            <p>Phone number</p>
            <input id="phone" type="tel" required>
            <p>Email</p>
            <input id="email" type="tel" required>
            <br>
            <button type="submit" id="sendForm" required>
                Send message
            </button>
        </form>
    `
}


