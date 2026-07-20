import './global.css';
import homePage from './pages/homePage.js';

document.addEventListener('DOMContentLoaded', () => {
   const content = document.querySelector('#content');
   content.innerHTML = homePage();

   const nav = document.querySelector('nav');
   nav.addEventListener('click', (e) => {
    const target = e.target.id;
    if (!target) return;

    switch (target) {
        case 'home':
            content.innerHTML = homePage();
            break;
        case 'menu':
            content.innerHTML = '<h2>Menu</h2>';
            break;
        case 'about':
            content.innerHTML = '<h2>About</h2>';
            break;
    
        default:
            return;
    }
   });
});