import { getFromLocalStorage } from './manage-local-storage.js';

// ugly stuff, but not sure there's a better way to handle it :)
export function renderResultText(resultText) {
    const player = getFromLocalStorage();

    if (player.vampireAlive === false && player.vampireHunter === true) {

        resultText.textContent = `OMG YOUR BOYFRIEND JUST TURNED INTO DUST BEFORE YOUR EYES!!` ;

    } else if (player.playerAlive === false && player.muchTeeth === true) {

        resultText.textContent = `Your boyfriend's sharp teeth were too much for your mortal neck.` ;

    } else if (player.win === true && player.isVampire === true) {

        resultText.textContent = `You did it! Your vampire boyfriend loves you so much he turned you into a vampire and you can spend eternity together.` ;

    } else if (player.win === true) {

        resultText.textContent = `You survived! Your vampire boyfriend is so accustomed to your presence he's not even actively trying to murder you.` ;

    } else if (player.tofu === true && player.vampireAlive === false) {

        resultText.textContent = `That dish is FULL of garlic! Your boyfriend starts to choke and suddenly explodes into a pile of ash!` ;

    } else if (player.shallowGrave === true && player.playerAlive === false) {

        resultText.textContent = 'Your boyfriend kills you and buries your body in a shallow grave. Dating is so hard these days!';

    } else if (player.river === true && player.playerAlive === false) {

        resultText.textContent = `Oh no! Your vampire boyfriend kills you and dumps your body in the river, better luck next time.` ;

    } else if (player.mothMan === true){

        resultText.textContent = 'Your vampire ex-boyfriend is a total loser. MothMan is drawn to you like a moth to a flame.';
    
    } else if (player.tea === true && player.playerAlive === false){

        resultText.textContent = 'Maybe next time you should drink something that doesn\'t take so long to steep.';
    
    } else if (player.vampireAlive === false && player.coffee === true){

        resultText.textContent = 'Your boyfriend died in a cute coffee shop, just like that old fortune teller said... ';
    
    } else if (player.playerAlive === false){

        resultText.textContent = 'Now you\'ll definitely never amount to anything...You died at the hands of your vampire boyfriend.';
    
    } else if (player.vampireAlive === false){

        resultText.textContent = 'Whelp, you accidentally killed your vampire boyfriend. A modern romance comes to a bitter end.';
    }
}

export function renderResultImage(image){
    const player = getFromLocalStorage();
    if (player.mothMan === true){
        image.src = '../assets/MothMan.png';
    }
}

const dialogue = [
    `You couldn't even make it through a single date with your boyfriend.`, 
    `You survived the cafeteria, but the cafe spelled doom for your relationship.`, 
    `You made it through the cafeteria and the cafe! The river walk is where your romance ends.`, 
    `Your love overcame the cafeteria, the cafe, and a walk on the river; but like so many before you, it ends at a bar.`, 
    `You successfully navigated the cafeteria, the cafe, the river walk, and the bar, but this is where your adventure ends.`, 
    `You made it through all five dates, you're a real survior and a lot smarter than you look!`
];

export function renderDatesText(datesText) {
    const player = getFromLocalStorage();

    datesText.textContent = dialogue[player.chapters];
}


