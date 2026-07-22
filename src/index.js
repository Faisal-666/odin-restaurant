import './assest/styles/global.css';
import homePage from './pages/homePage.js';
import menuPage from './pages/menuPage.js';
import aboutPage from './pages/aboutPage.js';

document.addEventListener('DOMContentLoaded', () => {
   const content = document.querySelector('#content');
    const contentRender = ((parentEl) => {
        let currentState = '';

        const setState = (newState) => {
            currentState = newState;
        }

        const render = (content, newState) => {
            if (newState === currentState) return;
            setState(newState);
            parentEl.style.opacity = 0;

            requestAnimationFrame(() => {
                parentEl.innerHTML = content();
                parentEl.style.opacity = 1;
            })
        };

        return { render };
    })(content);

   contentRender.render(homePage, 'home');

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
            contentRender.render(homePage, 'home');
            document.querySelector('nav > button.active').classList.remove('active');
            document.querySelector('nav > #home').classList.add('active');
            break;
        case 'menu':
        case 'menuBtn':
            contentRender.render(menuPage, 'menu');
            document.querySelector('nav > button.active').classList.remove('active');
            document.querySelector('nav > #menu').classList.add('active');
            break;
        case 'about':
            contentRender.render(aboutPage, 'about');
            break;
    
        default:
            return;
    }
   });
   
});