import { renderResponses } from './render-responses.js';
import { renderDialogueBox } from './render-dialogue-box.js';
import { renderNavButtons, resetNavButtons } from './render-nav-buttons.js';
import { renderDialButton, resetDialButton } from './render-dial-button.js';
import { renderCharacter } from './render-character.js';


// renderBeat() renders only the HTML elements that are neccisary within a scene
// renders the dialogueBox, responses, and wires the buttons to the responses
export function renderBeat(object){
    const section = document.createElement('section');

    const dialogueBox = renderDialogueBox(object.dialogueBox);
    // const responseSection = renderResponses(object.choices);

    section.id = 'beat-section';

    section.appendChild(dialogueBox);
    if (object.buttonChoice === 'dial'){
        renderDialButton(object);
        resetNavButtons();
    } else{
        const responseSection = renderResponses(object.choices);
        section.appendChild(responseSection);
        renderNavButtons(object);
        resetDialButton();
    }

    if (object.leftChar){
        const leftChar = renderCharacter(object.leftChar, "left-char");
        section.appendChild(leftChar);
    }

    if (object.rightChar){
        const rightChar = renderCharacter(object.rightChar, "right-char");
        section.appendChild(rightChar);
    }

    return section;
}

// updateBeat() is just to be used when scene has already been loaded
// updateBeat() clears out all dialogue and responses, then calls
// renderBeat() to update them with the new information
export function updateBeat(beat){
    const oldBeatSection = document.getElementById('beat-section');
    oldBeatSection.innerHTML = '';
    const newBeatSection = renderBeat(beat);
    oldBeatSection.appendChild(newBeatSection);
    
}