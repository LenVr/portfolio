import { closeContainer, showWanoProject } from "./controllers/projects.js";
import { ASSISTANT, FACTURATION, MEMORY, PINPONG, WANO, CLOSE } from "./libs/constantes.js";


export function showProject(type) {
    switch (type) {
        case WANO:
            console.log('wanito')
            showWanoProject();
            break;
        case PINPONG:
            console.log('ping')
            showPingPongProject();
            break;
        case MEMORY:
            console.log('memory')
            showMemoryGame();
            break;
        case FACTURATION:
            console.log('facturation')
            showFacturactionProject()
            break;
        case ASSISTANT:
            console.log('assist')
            showAssistantProject()
            break;
        case CLOSE:
            console.log('assist')
            closeContainer();
            break;
        default:
            break;
    }
}