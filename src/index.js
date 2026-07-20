import './assest/styles/global.css';
import homePage from './pages/homePage.js';
import menuPage from './pages/menuPage.js';

document.addEventListener('DOMContentLoaded', () => {
   const content = document.querySelector('#content');
   content.innerHTML = homePage();

   const logo = document.querySelector('.logo span');
   logo.addEventListener('click', () => {
    content.innerHTML = homePage();
   });

   const nav = document.querySelector('nav');
   nav.addEventListener('click', (e) => {
    const target = e.target.id;
    if (!target) return;

    switch (target) {
        case 'home':
            content.innerHTML = homePage();
            break;
        case 'menu':
            content.innerHTML = '';
            content.innerHTML = menuPage();
            break;
        case 'about':
            content.innerHTML = '<h2>About</h2>';
            break;
    
        default:
            return;
    }
   });
});