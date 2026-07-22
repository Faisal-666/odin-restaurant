import './assest/styles/global.css';
import homePage from './pages/homePage.js';
import menuPage from './pages/menuPage.js';

let currentPage = '';

const render = (parentEl, pageName, pageEl) => {
    if (currentPage === pageName) return;

    parentEl.innerHTML = pageEl();
    currentPage = pageName;
};

document.addEventListener('DOMContentLoaded', () => {
   const content = document.querySelector('#content');
   render(content, 'home', homePage);

   const nav = document.querySelector('nav');
   nav.addEventListener('click', (e) => {
    const target = e.target.closest('button');
    if (!target) return;

    document.querySelector('nav > button.active').classList.remove('active');
    target.classList.add('active');
   });

   document.addEventListener('click', (e) => {
    const target = e.target.id;
    if (!target) return;

    switch (target) {
        case 'home':
        case 'home-logo':
            render(content, 'home', homePage);
            document.querySelector('nav > button.active').classList.remove('active');
            document.querySelector('nav > #home').classList.add('active');
            break;
        case 'menu':
        case 'menuBtn':
            render(content, 'menu', menuPage);
            document.querySelector('nav > button.active').classList.remove('active');
            document.querySelector('nav > #menu').classList.add('active');
            break;
        case 'about':
            render(content, 'about', () => '<h2>About</h2>');
            break;
    
        default:
            return;
    }
   });
   
});