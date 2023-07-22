const header = document.querySelector("header");
window.addEventListener("scroll", function() {
header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};




/*==========================================  SCROLL REVEAL ========================================= */






ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-text, .about-text, .home, .portfolio-content ', { origin: 'top' });
ScrollReveal().reveal('.about-img, .home-text h1, .contact-text h2, .contact-text p, .contact-icons, .imagem-home', { origin: 'left' });
ScrollReveal().reveal('.home-text h3, .contact-text h4, .list li, .contact-form', { origin: 'right' });
ScrollReveal().reveal('.services-content, .container', { origin: 'bottom' });






/*==========================================  TYPED JS ========================================= */










/*==========================================  TYPED JS ========================================= */


const text = document.querySelector('');
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");

const letters = document.querySelectorAll('span');
for (let i=0; i<letters.length; i++){
    letters[i].addEventListener("mouseover", function(){
        letters[i].classList.add('active')
    })
}





