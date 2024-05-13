import { showWanoProject, showPingPongProject, showMemoryGame, showFacturactionProject, showAssistantProject } from "./controllers/projects.js";
import { ASSISTANT, FACTURATION, MEMORY, PINPONG, WANO, CLOSE } from "./libs/constantes.js";


export function showProject(type) {
    switch (type) {
        case WANO:
            showWanoProject();
            break;
        case PINPONG:
            showPingPongProject();
            break;
        case MEMORY:
            showMemoryGame();
            break;
        case FACTURATION:
            showFacturactionProject()
            break;
        case ASSISTANT:
            showAssistantProject()
            break;
        case CLOSE:
            closeContainer();
            break;
        default:
            break;
    }
}