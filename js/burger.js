let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.burger');
let menuItem = document.querySelectorAll('.burger__list_item');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})


menuItem.forEach (function(menuItem) {
    menuItem.addEventListener('click',function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
})


let fix = false
const body = document.body

function fixBurger(id) {

    fix = !fix
    if (fix === true) {
        body.style.overflow = 'hidden'
    }
    else {
        body.style.overflow = 'visible'
    }
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}