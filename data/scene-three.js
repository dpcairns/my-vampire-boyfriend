import { gameOverYouDied, gameOverMothMan, nextChapter, river } from '../utils/game-over.js';
import { updateBeat } from '../utils/render-beat.js';
import { updateScene } from '../utils/render-scene.js';
import { S4B1 } from './scene-four.js';

export const S3B1 = {
    id: 'riverwalk',
    image: 'riverwalk.jpg',
    transitionTitle: {
        title: 'Date 3:',
        subtitle: 'River Walk'
    },
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF.png',
        fadeIn: true,
        resize: false,
    },    
    buttonChoice: 'nav',
    dialogueBox: `Tonight we're taking the most romantic walk along the river. My boyfriend loves coming here, but it's a little creepy because lots of people go missing. Where to?`,
    choices: [{
        id: 'crowded-path',
        response: `Stay on crowded path!`,
        responseFunction: function() {
            updateBeat(S3B2);
        },
    },
    {
        id: 'secret-path',
        response: `Take a secret secluded path!`,
        responseFunction: function() {
            updateBeat(S3B3);
        },

    }, 
    {
        id: 'bench',
        response: `Sit on a cute bench!`,
        responseFunction: function() {
            updateBeat(S3B4);
        },
    }
    ]
};

const S3B2 = {
    id: 'distracted',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
        fadeIn: true,
    },    
    dialogueBox: `Umm ok wow, he seems really interested in that crowd of people over there, but I want him to pay attention to me!`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'snuggle',
            response: `Snuggle up to him for attention!`,
            responseFunction: function() {
                updateBeat(S3B6);
            }
        },
        {
            id: 'make-scene',
            response: 'Make a huge scene!',
            responseFunction: function() {
                updateBeat(S3B7);
            }
        }
    ]
};

const S3B3 = {
    id: 'alcove',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
        fadeIn: true,
    },    
    dialogueBox: `Ok, it is totally spooky here but my boyfriend looks like he wants to snuggle! What should I do?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'modest',
            response: `Be modest and walk away!`,
            responseFunction: function() {
                updateBeat(S3B8);
            }
        },
        {
            id: 'go-for-it',
            response: 'Go for it!',
            responseFunction: function() {
                updateBeat(S3B9);
            }
        }
    ]
};

const S3B4 = {
    id: 'bench-snuggle',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
        fadeIn: true,
    },
    dialogueBox: `This is so hot! He's breathing so heavy, and leaning towards me! What should I do?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'walk-away',
            response: `This is moving way too fast, just scoot away!`,
            responseFunction: function() {
                updateBeat(S3B10);
            }
        },
        {
            id: 'do-it',
            response: `Ummm let's do it!`,
            responseFunction: function() {
                updateBeat(S3B11);
            }
        }
    ]
};

const S3B6 = {
    id: 'got-him',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
    },
    dialogueBox: `Ok I totally have his attention, he's leaning in to kiss my neck! What should I do?`,
    buttonChoice: 'nav',
    choices: [
        {
            id: 'kiss-him',
            response: `Kiss him first!`,
            responseFunction: function() {
                updateBeat(S3B12);
            }
        },
        {
            id: 'let-it-happen',
            response: `Just let it happen!`,
            responseFunction: function() {
                updateBeat(S3B13);
            }
        }
    ]
};

const S3B7 = {
    id: 'mothman',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
    },
    buttonChoice: 'dial',
    buttonText: 'MOTHMAN!',
    dialogueBox: `I start yelling at my boyfriend! I deserve love and affection! Suddenly, MothMan appears...and he would definitely treat me right.`,
    responseFunction: function() {
        gameOverMothMan();
    },
};

const S3B8 = {
    id: 'alcove-push',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
        fadeOut: true,
    },
    buttonChoice: 'dial',
    buttonText: 'NEXT DATE!',
    dialogueBox: `My boyfriend gets so fiesty when I push him away! A jogger ran by and my boyfriend was so riled up, he started to chase after them. Haha, I drive him so crazy!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S4B1);
    },
};

const S3B9 = {
    id: 'alcove-snuggle',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
    },
    buttonChoice: 'dial',
    buttonText: 'OH NO!',
    dialogueBox: `My boyfriend leans in for a kiss! Oh, wait, he's kissing my neck instead. Oh, everything is getting so cold...`,
    responseFunction: function() {
        river();
        gameOverYouDied();
    },
};

const S3B10 = {
    id: 'robber',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
        fadeOut: true,
    },
    buttonChoice: 'dial',
    buttonText: 'NEXT DATE!',
    dialogueBox: `My boyfriend leans in for a kiss, but a ROBBER runs up and tries to grab my bag!! My boyfriend started chasing after him, he's so brave and loves me so much!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S4B1);
    },
};

const S3B11 = {
    id: 'bench-snuggle',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
    },
    buttonChoice: 'dial',
    buttonText: 'OH NO!',
    dialogueBox: `I hope my boyfriend is a good kisser! Oh, he's kissing my neck! Er, wait, that kind of hurts...`,
    responseFunction: function() {
        river();
        gameOverYouDied();
    },
};

const S3B12 = {
    id: 'falls',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
        fadeOut: true,
    },    
    buttonChoice: 'dial',
    buttonText: 'NEXT DATE!',
    dialogueBox: `I kiss him on the cheek and he's so surprised he stumbles and falls right into the river! My poor, clumsy boyfriend!!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S4B1);
    },
};

const S3B13 = {
    id: 'howl',
    leftChar: null,
    rightChar: {
        src: 'Vampire_BF_Crop.png',
        resize: true,
        fadeOut: true,
    },    
    buttonChoice: 'dial',
    buttonText: 'NEXT DATE!',
    dialogueBox: `He leans in VERY close but suddenly there's a howl from deep in the woods. My super mysterious boyfriend darts away! Gosh, he's sOoOo dreamy!`,
    responseFunction: function() {
        nextChapter();
        updateScene(S4B1);
    },
};