import * as flsFunction from "./modules/isWebp.js";
import { BTN_LEFT, BTN_RIGHT, CAROUSEL, ITEM_LEFT, ITEM_RIGHT, ITEM_ACTIVE} from "./modules/constants.js";
import { burger } from "./modules/burger.js";
import {slider} from "./modules/slider.js"
flsFunction.isWebp();
//============================================================================================


(function() {

    burger();
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

    let nextCart = [];

    CAROUSEL.addEventListener("animationend",(animationEvent) => {
        if(animationEvent.animationName === "move-left") {
            CAROUSEL.classList.remove("transition-left");
            let randomResult = randomGenerateBlock(nextCart);
            nextCart = [...randomResult]
            randomResult.forEach(item => {
              let carouselCard = document.createElement("div");
              carouselCard.classList.add('carousel__card');
              carouselCard.innerHTML = `
              <img class="carousel__card_img" src="${cards[item].img}" alt="${cards[item].type}"/>
              <h4 class="carousel__card_name">"${cards[item].name}"</h4>
              <button class="carousel__card_btn">Learn more</button>
              `;
              ITEM_LEFT.appendChild(carouselCard);
              ITEM_LEFT.innerHTML = ITEM_ACTIVE.innerHTML;
            })

        } else {
            CAROUSEL.classList.remove("transition-right");
            ITEM_LEFT.innerHTML =  ITEM_ACTIVE.innerHTML
            ITEM_ACTIVE.innerHTML = ITEM_RIGHT.innerHTML;
            ITEM_RIGHT.innerHTML = "";
            let randomResult = randomGenerateBlock(nextCart);
            nextCart = [...randomResult]
            randomResult.forEach(item => {
              let carouselCard = document.createElement("div");
              carouselCard.classList.add('carousel__card');
              carouselCard.innerHTML = `
              <img class="carousel__card_img" src="${cards[item].img}" alt="${cards[item].type}"/>
              <h4 class="carousel__card_name">"${cards[item].name}"</h4>
              <button class="carousel__card_btn">Learn more</button>
              `;
              ITEM_RIGHT.appendChild(carouselCard);
            })
        }

        BTN_LEFT.addEventListener("click", moveLeft);
        BTN_RIGHT.addEventListener("click", moveRight);
    });
}())

