//  Найтинужныеузлы
constpopupButton = document.querySelector('.popup-menu_buton');
constpopupWrapper = document.querySelector('.popup-menu');
constpopupMenu = document.querySelector('.popup-menu_list');

// Выполним ф-цию клика по кнопке

popupButton.addEventListener('click', handleMenu);

// Ф-ция, которая показывает и скрывает поп-ап
functionhandleMenu() {
    popupMenu.classList.toggle('hide-popup');
}

// Ф-ция при клике на любое место экрана
document.addEventListener('click', hidePopup);

functionhidePopup(el) {
    // Проверяем, есть и внутри того, по чему кликнули поп-ап меню или кнопка
    lettargetInside = popupButton.contains(el.target);
    // Если нет, то прячем меню
    if(!targetInside) {
        popupMenu.classList.add('hide-popup');
    }
    else {
        return;
    }
 }
