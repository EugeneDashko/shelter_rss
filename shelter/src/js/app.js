import * as flsFunction from "./modules/functions.js"
flsFunction.isWebp();
//============================================================================================
const cards = [
    {
      name: 'Jennifer',
      img: 'img/slide_2.jpg',
      type: 'Dog',
      breed: 'Labrador',
      description:
        "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: '2 months',
      inoculations: ['none'],
      diseases: ['none'],
      parasites: ['none'],
    },
    {
      name: 'Sophia',
      img: 'img/slide_4.jpg',
      type: 'Dog',
      breed: 'Shih tzu',
      description:
        "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: '1 month',
      inoculations: ['parvovirus'],
      diseases: ['none'],
      parasites: ['none'],
    },
    {
      name: 'Woody',
      img: 'img/slide_3.jpg',
      type: 'Dog',
      breed: 'Golden Retriever',
      description:
        'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
      age: '3 years 6 months',
      inoculations: ['adenovirus', 'distemper'],
      diseases: ['right back leg mobility reduced'],
      parasites: ['none'],
    },
    {
      name: 'Scarlett',
      img: 'img/slide_7.jpg',
      type: 'Dog',
      breed: 'Jack Russell Terrier',
      description:
        'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
      age: '3 months',
      inoculations: ['parainfluenza'],
      diseases: ['none'],
      parasites: ['none'],
    },
    {
      name: 'Katrine',
      img: 'img/slide_1.jpg',
      type: 'Cat',
      breed: 'British Shorthair',
      description:
        'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
      age: '6 months',
      inoculations: ['panleukopenia'],
      diseases: ['none'],
      parasites: ['none'],
    },
    {
      name: 'Timmy',
      img: 'img/slide_5.jpg',
      type: 'Cat',
      breed: 'British Shorthair',
      description:
        'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
      age: '2 years 3 months',
      inoculations: ['calicivirus', 'viral rhinotracheitis'],
      diseases: ['kidney stones'],
      parasites: ['none'],
    },
    {
      name: 'Freddie',
      img: 'img/slide_8.jpg',
      type: 'Cat',
      breed: 'British Shorthair',
      description:
        'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
      age: '2 months',
      inoculations: ['rabies'],
      diseases: ['none'],
      parasites: ['none'],
    },
    {
      name: 'Charly',
      img: 'img/slide_6.jpg',
      type: 'Dog',
      breed: 'Jack Russell Terrier',
      description:
        'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
      age: '8 years',
      inoculations: ['bordetella bronchiseptica', 'leptospirosis'],
      diseases: ['deafness', 'blindness'],
      parasites: ['lice', 'fleas'],
    },
  ];

// самовызывающаяся функция
(function() {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const overlay = document.querySelector('.overlay');

//карусель, кнопки:
    const BTN_LEFT = document.querySelector('#btn-left');
    const BTN_RIGHT = document.querySelector('#btn-right');
    const CAROUSEL = document.querySelector('#carousel');
    const ITEM_LEFT =  document.querySelector('#item-left');
    const ITEM_RIGHT =  document.querySelector('#item-right');

    //Burger ==============================Burger ===========================

    burgerItem.addEventListener('click', (e) => {
        menu.classList.toggle('header__nav_active'); //выезжает меню
        burgerItem.classList.toggle('active'); // поворачиваем бургер
        if (menu.classList.contains('header__nav_active')) {
            showOverlay() // вытягиваю фон
        }
        else {
            hideOverlay() // затягиваю вон
        }
        // Отключаю прокрутку страницы
        if(menu.classList.contains('header__nav_active')) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'visible'
        }
    });

    overlay.addEventListener('click', (event) => {
        const target = event.target;
        if(target.closest('.overlay')) {
        menu.classList.remove('header__nav_active');
        burgerItem.classList.remove('active');
        document.body.style.overflow = 'visible';
        hideOverlay()
        }
    });


    // функции overlay
    const showOverlay = () => {
        overlay.style.display = 'block';
            overlay.style.opacity = '1'
    }

    const hideOverlay = () => {
        overlay.style.opacity = '0';
            overlay.style.display = 'none'
    }

    //Burger ==============================Burger ===========================
    //Create Cards:

    
    // функция генерации случайны чисел
    const randomGenerateNum =  (arg) => {
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
    }


    //Carousel==============================Carousel Main===========================
    //https://www.youtube.com/watch?v=2xP-HahCtio&t=130s

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
            document.querySelector('#item-active').innerHTML = ITEM_LEFT.innerHTML;
            ITEM_LEFT.innerHTML = "";
            let randomResult = randomGenerateNum(nextCart);
            nextCart = [...randomResult]
            randomResult.forEach(item => {
            let carouselCard = document.createElement("div");
            carouselCard.classList.add('carousel__card');
            carouselCard.innerHTML = `
            <img class="carousel__card_img" src="${cards[item].img}" alt="${cards[item].type}"/>
            <h4 class="carousel__card_name">${cards[item].name}</h4>
            <button class="carousel__card_btn">Learn more</button>
            `;
            ITEM_LEFT.appendChild(carouselCard);
            })

        } else {
            CAROUSEL.classList.remove("transition-right");
            document.querySelector('#item-active').innerHTML = ITEM_RIGHT.innerHTML;
            ITEM_RIGHT.innerHTML = "";
            let randomResult = randomGenerateNum(nextCart);
            nextCart = [...randomResult]
            randomResult.forEach(item => {
            let carouselCard = document.createElement("div");
            carouselCard.classList.add('carousel__card');
            carouselCard.innerHTML = `
            <img class="carousel__card_img" src="${cards[item].img}" alt="${cards[item].type}"/>
            <h4 class="carousel__card_name">${cards[item].name}</h4>
            <button class="carousel__card_btn">Learn more</button>
            `;
            ITEM_RIGHT.appendChild(carouselCard);
            })
        }

        BTN_LEFT.addEventListener("click", moveLeft);
        BTN_RIGHT.addEventListener("click", moveRight);
    });

        //Carousel==============================Carousel Main===========================
}())

