import * as flsFunction from "./modules/isWebp.js";
import { BTN_LEFT, BTN_RIGHT, CAROUSEL, ITEM_LEFT, ITEM_RIGHT, ITEM_ACTIVE} from "./modules/constants.js";
import { burger } from "./modules/burger.js";
import {createActive, getCards, newCardsPets, createNewCards,  } from "./modules/slider.js"
flsFunction.isWebp();
//============================================================================================


(function() {

    burger();
}())

const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_RIGHT.removeEventListener("click", moveRight);
    BTN_LEFT.removeEventListener("click", moveLeft);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);



CAROUSEL.addEventListener("animationend",(animationEvent) => {
    if(animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove("transition-left");
        ITEM_ACTIVE.innerHTML=ITEM_LEFT.innerHTML;
        ITEM_LEFT.innerHTML = '';
        let randomResult = getCards(createLeft);
        randomResult.forEach(card => {
            ITEM_LEFT.append(newCardsPets[card]);
        });
    } else {
        CAROUSEL.classList.remove("transition-right");
        ITEM_ACTIVE.innerHTML=ITEM_RIGHT.innerHTML;
        ITEM_RIGHT.innerHTML = '';
        let randomResult = getCards(createNewCards);
        randomResult.forEach(card => {
            ITEM_RIGHT.append(newCardsPets[card]);
        });
    }

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
});

