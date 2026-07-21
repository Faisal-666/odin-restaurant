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

   const logo = document.querySelector('.logo span');
   logo.addEventListener('click', () => {
    render(content, 'home', homePage);
   });

   const nav = document.querySelector('nav');
   nav.addEventListener('click', (e) => {
    const target = e.target.id;
    if (!target) return;

    switch (target) {
        case 'home':
            render(content, 'home', homePage);
            break;
        case 'menu':
            render(content, 'menu', menuPage);
            break;
        case 'about':
            content.innerHTML = '<h2>About</h2>';
            break;
    
        default:
            return;
    }
   });
});