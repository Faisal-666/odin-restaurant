import '../assest/styles/homePage.css';
import restaurantBg from '../assest/images/restaurant.jpg';
import 'iconify-icon';

const homePage = () => {
    return `
        <div id="homePage">
            <div class="img-wrapper">
                <img src="${restaurantBg}" alt="restaurant-image">
            </div>

            <div class="info-wrapper">
                <div>
                    <iconify-icon icon="game-icons:deer"></iconify-icon>
                    <h1>The Wild Steakhouse</h1>
                </div>
                <p class="desc">Brings the taste of the wilderness to an unforgettable dining experience. 
                    Inspired by ancient hunting traditions and modern culinary techniques, 
                    we serve premium wild game dishes prepared over open flames with handcrafted sauces and seasonal ingredients.
                    From tender venison to rich game-inspired creations, every plate tells a story of nature, craftsmanship, and bold flavors.
                </p>
                <span>Hours: Mon-Fri 10:00 - 22:00</span>
            </div>
        </div>
    `;
};

export default homePage;