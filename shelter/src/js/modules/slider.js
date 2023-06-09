import { cardsPets } from "./pets.js";
import {ITEM_ACTIVE, ITEM_LEFT, ITEM_RIGHT} from "./constants.js"


export let newCardsPets = new Array();

export let createActive, createNewCards;


export const getCards =  (arg) => {
    let arrRandom = [];
    let randomInt = () => Math.floor(Math.random() * 8);
    if(!arg.length) {
        while(arrRandom.length < 3) {
            let randomNum = randomInt();
            if(!arrRandom.includes(randomNum)) {
                arrRandom.push(randomNum);
            }
        }
        return arrRandom
    }
    while (arrRandom.length < 3) {
        let randomNum = randomInt();
        if(arrRandom.includes(randomNum)) {
            continue
        }
        if(arg.includes(randomNum)) {
            continue
        }

        arrRandom.push(randomNum);
    }
    return arrRandom;
};


const CARDS_SECTION = 3;
const BLOCKS_CARDS = 3;




const pets = (arr) => {
    arr.forEach(element => {
        const componentDiv = document.createElement('div');
        componentDiv.classList.add('carousel__card');
        const componentImg = document.createElement('img');
        componentImg.classList.add('carousel__card_img');
        componentImg.src = element.img;
        const componentH4 = document.createElement('h4');
        componentH4.classList.add('carousel__card_name');
        componentH4.innerText = element.name;
        const componentButton = document.createElement('button');
        componentButton.classList.add('carousel__card_btn');
        componentButton.innerText = "Learn more";
        componentDiv.append(componentImg,componentH4,componentButton);
        newCardsPets.push(componentDiv)
    });
}
pets(cardsPets);


createActive = getCards([]);
createActive.forEach(card => {
    ITEM_ACTIVE.append(newCardsPets[card]);
});

createNewCards= getCards(createActive);
createNewCards.forEach(card => {
    ITEM_LEFT.appendChild(newCardsPets[card]);
});

ITEM_RIGHT.innerHTML = ITEM_LEFT.innerHTML

