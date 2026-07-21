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

   document.addEventListener('click', (e) => {
    const target = e.target.id;
    if (!target) return;

    switch (target) {
        case 'home':
        case 'home-logo':
            render(content, 'home', homePage);
            break;
        case 'menu':
        case 'menuBtn':
            render(content, 'menu', menuPage);
            break;
        case 'about':
            render(content, 'about', () => '<h2>About</h2>');
            break;
    
        default:
            return;
    }
   });
   
});