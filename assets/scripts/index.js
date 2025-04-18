// header 
const checkbox = document.querySelector('.header-menu__checkbox')
const burger = document.querySelector('.header-menu__list')
const itemsBurger = document.querySelectorAll('.header-menu__list-item')

function closeBurger(event) {
   let index = Array.from(itemsBurger).indexOf(event.target)
   let num = itemsBurger.length - 1
   if(index <= num && index!= -1) {
    checkbox.checked = false;
   }
}

burger.addEventListener('click', closeBurger); 
