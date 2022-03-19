const nav = document.querySelector('nav');
const body = document.querySelector('body')
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click',() => {
    body.classList.toggle('show')
    nav.classList.toggle('show');
    
});
