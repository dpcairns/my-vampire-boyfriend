import { gameOver } from '../utils/game-over.js';
import { updateBeat } from '../utils/render-beat.js';
import { updateScene } from '../utils/render-scene.js';
import { S2B1 } from './scene-two.js';

export const S1B1 = {
    id: 'cafeteria',
    image: 'castle.jpg',
    char: 'Vampire_BF.png',
    dialogueBox: [
        "My boyfriend is volunteering at the hospital blood drive today, so we're going to have a lunch date in the cafeteria!",
        "He's keto or something so normally I'm the only one who eats. But I really don't mind at all, it's just nice to spend time together!",
        "What should I have for lunch?"],
    choices: [{
        id: 'meat',
        response: `A steak, rare please!`,
        responseFunction: function() {
            updateBeat(S1B2);
        },
    },
    {
        id: 'salad',
        response: `I'll go with salad, my boyfriend says he prefers vegetarians.`,
        responseFunction: function() {
            updateBeat(S1B3);
        },

    }, 
    {
        id: 'tofu',
        response: `I'm feeling a little vegan today, I'll get the tofu stir-fry!`,
        responseFunction: function() {
            gameOver();
            console.log('`The stir-fry contains an obscene amount of garlic and your vampire boyfriend becomes violently ill and dies.`');
        },
        vbfDie: true
    }
    ]
};

const S1B2 = {
    id: 'feed',
    dialogueBox: [`Wow he seems like he might want to share this with me, how romantic! What should I do?`],
    choices: [
        {
            id: 'meatSick',
            response: `I'll give him a little bite...`,
            responseFunction: function() {
                console.log('Here! 4');
            },                
        },
        {
            id: 'pushAway',
            response: `I get overwhelmed when he pays this much attention to me, I'll just push him away.`,
            responseFunction: function() {
                updateScene(S2B1);
            },                
        }
    ]
};
                
const S1B3 = {
    id: 'letHim',
    dialogueBox: [`Omg he's leaning closer to my neck`],
    choices: [
        {
            id: 'youDie',
            response: `I'll let him...`,
            responseFunction: function() {
                gameOver();
            }
        },
        {
            id: 'pushAway',
            response: `I get overwhelmed when he pays this much attention to me, I'll just push him away.`,
            responseFunction: function() {
                updateScene(S2B1);
            }
        }]
};

// dialogueBox: `Wow, that steak must have not been on his diet, he seemed to get really sick and just got up and left. He's so mysterious!`,

