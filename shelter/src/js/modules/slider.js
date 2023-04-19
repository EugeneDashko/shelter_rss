export const randomGenerateBlock =  (arg) => {
    let arrRandom = [];
    let randomInt = () => Math.floor(Math.random() * 7);
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

function createComponent (cardsPets) {
    if(!Array.isArray(cardsPets)) {
      throw TypeError(`Slider error. Pets array is invalid.`);
    }
    const component = document.createElement('div');
    component.classList.add('carousel__card');
    component.innerHTML = `
    <img class="carousel__card_img" src="${cardsPets[pet].img}" alt="${cardsPets[pet].type}">
    <h4 class="carousel__card_name">Katrine</h4>
    <button class="carousel__card_btn">Learn more</button>
    `;
    return component;
};

export {createComponent}