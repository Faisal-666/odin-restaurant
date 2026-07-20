import '../assest/styles/menuPage.css';
import listItemMenu from '../data/listMenu.js';

const makeMenuitem = (data) => {
    return data.map((el) => {
        return `
            <div class="menu-item">
                <span class="item-type">● ${el.type}</span>
                
                <div class="item-name-wrapper">
                    <iconify-icon class="item-icon" icon=${el.icon}></iconify-icon>
                    <h3 class="item-name">${el.name}</h3>
                </div>
                
                <span class="item-price">${el.price}</span>
                <p class="item-desc">${el.desc}</p>
            </div>
        `;
    }).join('');
};

const menuPage = () => {
    return `
        <div id="menuPage">
            <h2>Menu</h2>
            <div id="item-wrapper">
                ${makeMenuitem(listItemMenu)}
            </div>
        </div>
    `;
};

export default menuPage;