import { getHomeContent } from './home.js';
import { getPricing } from './pricing.js';
import { getBills } from './bills.js';

const menu = document.getElementById('menu');
const content = document.getElementById('content');

// Building our menu dynamically
menu.innerHTML = `
    <button data-page="home">Home</button>
    <button data-page="pricing">Pricing</button>
    <button data-page="bills">Bills</button>
`;

// handling click events
menu.addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') return;
    const page = e.target.dataset.page;
    if (page === 'home') {
        content.innerHTML = getHomeContent(); 
    } 
    else if (page === 'pricing') {
        content.innerHTML = getPricing();
    } 
    else if (page === 'bills') {
        content.innerHTML = getBills();
    } 
});

content.innerHTML = getHomeContent(); 