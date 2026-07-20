import './menuPage.css';

const listItemMenu = [
    {
        name: 'Royal Venison Steak',
        price: '$32',
        type: 'Main Course',
        desc: 'Tender venison steak grilled over open flames, served with rosemary sauce, roasted vegetables, and mashed potatoes.',
        icon: 'game-icons:deer',
    },
    {
        name: 'Moosewood Signature Steak',
        price: '$45',
        type: 'Chef Special',
        desc: 'Premium moose steak with a rich peppercorn sauce, wild mushrooms, and rustic potatoes.',
        icon: 'fluent-emoji-high-contrast:moose',
    },
    {
        name: 'Wild Duck Confit',
        price: '$28',
        type: 'Main Course',
        desc: 'Slow-cooked wild duck served with herb rice, seasonal vegetables, and a sweet berry glaze.',
        icon: 'emojione-monotone:duck',
    },
    {
        name: 'Forest Hunter Burger',
        price: '$18',
        type: 'Casual Menu',
        desc: 'A handcrafted wild game burger topped with caramelized onions, smoked cheese, and house sauce.',
        icon: 'lucide-lab:burger',
    },
    {
        name: 'Grilled Salmon',
        price: '$24',
        type: 'Alternative Dish',
        desc: 'Fresh salmon grilled over ember fire with lemon butter sauce and garden vegetables.',
        icon: 'game-icons:salmon',
    },
    {
        name: 'Wild Mushroom Soup',
        price: '$10',
        type: 'Appetizer',
        desc: 'Creamy mushroom soup made with forest mushrooms and aromatic herbs.',
        icon: 'mdi:mushroom-outline',
    },
    {
        name: 'Hunter`s Berry Mocktail',
        price: '$8',
        type: 'Drink',
        desc: 'A refreshing blend of wild berries, citrus, and sparkling water.',
        icon: 'mdi:drink',
    },
    {
        name: 'Smoked Vanilla Dessert',
        price: '$8',
        type: 'Dessert',
        desc: 'Vanilla cream dessert with smoked caramel and seasonal fruits.',
        icon: 'ep:dessert',
    }
];

const makeMenuitem = () => {
    return listItemMenu.map((el) => {
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
    const container = document.createElement('div');
    container.id = 'menuPage';

    const h2 = document.createElement('h2');
    h2.textContent = 'Menu'
    container.append(h2);
    
    const wrapper = document.createElement('div');
    wrapper.id = 'item-wrapper';
    wrapper.innerHTML = makeMenuitem();
    container.append(wrapper);

    return container;
};

export default menuPage;