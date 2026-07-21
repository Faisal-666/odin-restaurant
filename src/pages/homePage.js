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
                <div id="icon">
                    <iconify-icon icon="game-icons:deer"></iconify-icon>
                    <h1>The Wild Steakhouse</h1>
                </div>
                
                <span id="tagline"><i>"Taste of the wilderness, crafted over open flames"</i></span>

                <div id="list-wrapper">
                    <ul>
                        <li>Premium wild game dishes</li>
                        <li>Handcrafted seasonal sauces</li>
                        <li>Traditional fire cooking</li>
                    </ul>
                </div>

                <div id="hours-wrapper">
                    <span>Hours<span>                
                    <span id="hours">🕒 Fri-Mon 10:00 - 22:00</span>
                </div>

                <button id="menuBtn" title="View Menu" type="button">View Menu</button>
            </div>
        </div>
    `;
};

export default homePage;