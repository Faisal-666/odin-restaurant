import '../assest/styles/aboutPage.css';

const aboutPage = () => {
    return `
        <div id="aboutPage">
            <div id="about-icon">
                <iconify-icon icon="pinhead:deer-head-with-antlers"></iconify-icon>
                <h2>The Wild Steakhouse</h2>
                <span>Est 2008</span>
            </div>

            <div>
                <h3>🌿 Our Values</h3>
                <ul>
                    <li>Rare, Fresh & Quality ingredients</li>
                    <li>Signature chef spesial</li>
                    <li>Local flavors</li>
                    <li>Unique dishes</li>
                </ul>
            </div>

            <button id="visitBtn" title="Visit Us" type="button">Visit Us</button>
        </div>
    `;
};

export default aboutPage;