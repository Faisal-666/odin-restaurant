import '../assest/styles/menuPage.css';
import listItemMenu from '../data/listMenu.js';

const makeMenuitem = (data) => {
    return data.map((el) => {
        return `
            <div class="menu-item">
                <div class="item-name-wrapper">
                    <iconify-icon class="item-icon" icon=${el.icon}></iconify-icon>
                    <h3 class="item-name">${el.name} <span class="item-price"> - ${el.price}</span></h3>
                </div>
                
                <ul class="item-desc">
                    ${el.desc.map(li =>`<li>${li}</li>`).join('')}
                </ul>

                
                <div class="item-type ${el.type.toLowerCase().split(' ').join('-')}">${el.type}</div>
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