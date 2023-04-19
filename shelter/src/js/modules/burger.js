import {burgerItem, menu, overlay} from "./constants.js";
function burger () {

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
        overlay.style.opacity = '1';
    }

    const hideOverlay = () => {
        overlay.style.opacity = '0';
        overlay.style.display = 'none';
    }
}
export {burger}
